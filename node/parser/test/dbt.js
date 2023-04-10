import {traverse} from "../sql.js";
import {DBTVisitor} from '../dbt/visitor.js'
import assert from "assert";

describe('insert', () => {

    it('dbt sample: keep fromClause', () => {
        const sql = `INSERT INTO returned_orders (order_id, order_date, total_return)
                     SELECT order_id, order_date, total
                     FROM orders
                     WHERE type = 'return'`
        const dbtSQL = `SELECT\n\torder_id AS order_id,\n\torder_date AS order_date,\n\ttotal AS total_return\nFROM orders
                     WHERE type = 'return'`
        const visitor = new DBTVisitor(sql, {useRefTable: false})
        traverse(visitor)
        assert.equal(visitor.dbt, dbtSQL)
    })

    it('dbt sample: use dbt reference', () => {
        const sql = `INSERT INTO returned_orders (order_id, order_date, total_return)
                     SELECT order_id, order_date, total
                     FROM orders
                     WHERE type = 'return'`
        const dbtSQL = `SELECT\n\torder_id AS order_id,\n\torder_date AS order_date,\n\ttotal AS total_return\nFROM {{ ref('orders') }} WHERE type = 'return'`
        const visitor = new DBTVisitor(sql)
        traverse(visitor)
        assert.equal(visitor.dbt, dbtSQL)
    })

})
describe('update', () => {
    it('dbt sample', () => {

        const sql = `UPDATE orders
                     SET type = 'return'
                     WHERE total < 0`
        const visitor = new DBTVisitor(sql)
        traverse(visitor)
        const dbtSQL = `SELECT
\t{{ dbt_utils.star(from=ref('orders'), except=['type']) }},
\tCASE
\t\tWHEN total < 0 THEN 'return'
\t\tELSE type
\tEND AS type
FROM {{ ref('orders') }}`
        assert.equal(visitor.dbt, dbtSQL)
    })
})
describe('delete', () => {
    it('dbt sample', () => {
        const sql = 'DELETE FROM stg_orders WHERE order_status IS NULL'
        const visitor = new DBTVisitor(sql)
        traverse(visitor)

        const dbtSQL =
            `WITH soft_deletes AS (
    SELECT
         *,
        CASE
            WHEN order_status IS NULL THEN true
            ELSE false
        END AS to_delete

    FROM {{ ref('stg_orders') }}

)

SELECT * FROM soft_deletes WHERE to_delete = false`
        assert.equal(visitor.dbt, dbtSQL)
    })


})

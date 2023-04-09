import {traverse} from "../sql.js";
import {DBTVisitor} from '../dbt/visitor.js'
import assert from "assert";

describe('insert', () => {

    it('insert into: keep fromClause', () => {
        const sql = `INSERT INTO returned_orders (order_id, order_date, total_return)
                     SELECT order_id, order_date, total
                     FROM orders
                     WHERE type = 'return'`
        const dbtSQL = `SELECT\n\torder_id AS order_id,\n\torder_date AS order_date,\n\ttotal AS total_return\nFROM orders WHERE type = 'return'`
        const visitor = new DBTVisitor(sql, {useRefTable: false})
        traverse(visitor)
        assert.equal(visitor.dbt, dbtSQL)
    })

    it('insert into: use dbt reference', () => {
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
    it('single column', () => {

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

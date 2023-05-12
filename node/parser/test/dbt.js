import { bind} from "../sql.js";
import {DBTListener} from '../dbt/visitor.js'
import {build} from '../dbt/configBlock.js'
import assert from "assert";

describe('insert', () => {

    it('dbt sample: keep fromClause', () => {
        const sql = `INSERT INTO returned_orders (order_id, order_date, total_return)
                     SELECT order_id, order_date, total
                     FROM orders
                     WHERE type = 'return'`
        const dbtSQL = `{{
    config(
        
    )
}}
SELECT\n\torder_id AS order_id,\n\torder_date AS order_date,\n\ttotal AS total_return\nFROM orders
                     WHERE type = 'return'`
        const listener = new DBTListener(sql, {useRefTable: false})
        bind(listener)
        assert.equal(listener.dbt, dbtSQL)
    })

    it('dbt sample: use dbt reference', () => {
        const sql = `INSERT INTO returned_orders (order_id, order_date, total_return)
                     SELECT order_id, order_date, total
                     FROM orders
                     WHERE type = 'return'`
        const dbtSQL = `{{
    config(
        
    )
}}
SELECT\n\torder_id AS order_id,\n\torder_date AS order_date,\n\ttotal AS total_return\nFROM {{ ref('orders') }} WHERE type = 'return'`
        const listener = new DBTListener(sql)
        bind(listener)
        assert.equal(listener.dbt, dbtSQL)
    })

})
describe('update', () => {
    it('dbt sample', () => {

        const sql = `UPDATE orders
                     SET type = 'return'
                     WHERE total < 0`
        const listener = new DBTListener(sql)
        bind(listener)
        const dbtSQL = `{{
    config(
        
    )
}}
SELECT
\t{{ dbt_utils.star(from=ref('orders'), except=['type']) }},
\tCASE
\t\tWHEN total < 0 THEN 'return'
\t\tELSE type
\tEND AS type
FROM {{ ref('orders') }}`
        assert.equal(listener.dbt, dbtSQL)
    })
})
describe('delete', () => {
    it('dbt sample', () => {
        const sql = 'DELETE FROM stg_orders WHERE order_status IS NULL'
        const listener = new DBTListener(sql)
        bind(listener)

        const dbtSQL =
            `{{
    config(
        
    )
}}
WITH soft_deletes AS (
    SELECT
         *,
        CASE
            WHEN order_status IS NULL THEN true
            ELSE false
        END AS to_delete

    FROM {{ ref('stg_orders') }}

)

SELECT * FROM soft_deletes WHERE to_delete = false`
        assert.equal(listener.dbt, dbtSQL)
    })


})
describe('configBlock', function () {
    it('', () => {
        const configs = {
            materialized: 'incremental',
            unique_key: 'date_day'
        }
        const result = build(configs)
        assert.equal(result, `{{
    config(
        materialized=incremental,
\t\tunique_key=date_day
    )
}}`)
    })
})

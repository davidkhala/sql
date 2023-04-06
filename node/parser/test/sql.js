import {parse, validate, traverse, SqlParserVisitor} from '../sql.js'
import {consolePrintVisitor} from '../debug.js'

describe('basic usage', () => {
    const correctSql = 'SELECT id,name from user1;';
    it('validate', () => {
        validate(correctSql)
    })
    it('tokenize', () => {
        const tokens = parse(correctSql, true)
        console.info(tokens)
    })
    it('traverse', () => {
        class Visitor extends SqlParserVisitor {

            visitTableName(context) {
                consolePrintVisitor(context)
                super.visitTableName(context)
            }

            visitFromClause(context) {
                consolePrintVisitor(context)
                super.visitFromClause(context)
            }

        }

        traverse(correctSql, Visitor)
    })
});
describe('traverse: dev cases', () => {
    class Visitor extends SqlParserVisitor {
        visitDmlStatement(context) {
            consolePrintVisitor(context)
            super.visitDmlStatement(context)
        }
        visitDdlStatement(context){
            consolePrintVisitor(context)
            super.visitDdlStatement(context)
        }

    }

    it('insert into', () => {
        const sql = `INSERT INTO returned_orders (order_id, order_date, total_return)
                     SELECT order_id, order_date, total
                     FROM orders
                     WHERE type = 'return'`
        traverse(sql, Visitor)

        // TODO

        // SELECT
        //     order_id as order_id,
        //     order_date as order_date,
        //     total as total_return
        // FROM {{ ref('orders') }} WHERE type = 'return'

    })


})

import {parse, validate, traverse, AbstractVisitor} from '../sql.js'
import {consolePrintVisitor} from '../debug.js'
import {insertVisitor} from "../insert.js";
import assert from "assert";

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
        class Visitor extends AbstractVisitor {

            visitTableName(context) {
                consolePrintVisitor(context, this)
                super.visitTableName(context)
            }

            visitFromClause(context) {
                consolePrintVisitor(context, this)
                super.visitFromClause(context)
            }

        }

        traverse(correctSql, Visitor)
    })
});
describe('traverse: dev cases', () => {
    class Visitor extends AbstractVisitor {
        visitInsertStatement(context) {
            insertVisitor(context, this)
            super.visitInsertStatement(context)
        }

        visitDdlStatement(context) {
            consolePrintVisitor(context, this)
            super.visitDdlStatement(context)
        }

    }

    it('dbt insert into', () => {
        const sql = `INSERT INTO returned_orders (order_id, order_date, total_return)
                     SELECT order_id, order_date, total
                     FROM orders
                     WHERE type = 'return'`
        const dbtSQL = `SELECT\n\torder_id AS order_id,\n\torder_date AS order_date,\n\ttotal AS total_return\nFROM orders WHERE type = 'return'`
        const visitor = traverse(sql, Visitor)
        assert.equal(visitor.dbt, dbtSQL)

    })


})

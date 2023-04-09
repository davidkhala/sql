import {parse, validate, traverse, AbstractVisitor} from '../sql.js'
import {consolePrintVisitor} from '../debug.js'

class Visitor extends AbstractVisitor {

    visitDmlStatement(ctx) {
        consolePrintVisitor(ctx, this)
        return super.visitDmlStatement(ctx);
    }

}

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
        const visitor = new Visitor(correctSql)
        traverse(visitor)
    })
});
describe('complex usage', () => {
    it('insert select', () => {

        const sql = `INSERT INTO returned_orders (order_id, order_date, total_return)
                     SELECT order_id, order_date, total
                     FROM orders
                     WHERE type = 'return'`
        const visitor = new Visitor(sql)
        traverse(visitor)
    })
    it('update', () => {
        const sql = `UPDATE orders
                     SET type = 'return'
                     WHERE total < 0`
        const visitor = new Visitor(sql)
        traverse(visitor)
    })
})


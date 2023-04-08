import {parse, validate, traverse, AbstractVisitor} from '../sql.js'
import {consolePrintVisitor} from '../debug.js'
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

            visitDmlStatement(ctx) {
                consolePrintVisitor(ctx, this)
                return super.visitDmlStatement(ctx);
            }

        }
        const visitor = new Visitor(correctSql)
        traverse(visitor)
    })
});


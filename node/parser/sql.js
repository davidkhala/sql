import {GenericSQL, SqlParserVisitor} from 'dt-sql-parser';
import * as assert from "assert";

const parser = new GenericSQL();

export function validate(sql) {
    const errors = parser.validate(sql);
    assert.equal(errors.length, 0)
}

export function parse(sql, pretty) {
    const tokens = parser.getAllTokens(sql)
    if (pretty) {
        return tokens.map(({start, stop}) => sql.substring(start, stop + 1))
    }
    return tokens

}


/**
 *
 * @param sql
 * @param {function} AbstractVisitor a class inherit SqlParserVisitor
 * @returns {AbstractVisitor}
 */
export function traverse(sql, AbstractVisitor) {

    const tree = parser.parse(sql)
    const visitor = new AbstractVisitor(sql)
    visitor.visit(tree)
    return visitor
}

export class AbstractVisitor extends SqlParserVisitor {
    constructor(sql) {
        super();
        this.source = sql
    }

    getText(context) {
        if (!context.start) {
            assert.ok(context.symbol)
            return context.getText()
        }
        const {start} = context.start
        const {stop} = context.stop
        return this.source.substring(start, stop + 1)
    }

}



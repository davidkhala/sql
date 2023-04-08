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
 * @param {AbstractVisitor} visitor a class inherit SqlParserVisitor
 * @returns {AbstractVisitor}
 */
export function traverse(visitor) {
    const tree = parser.parse(visitor.sql)
    visitor.visit(tree)
}

export class AbstractVisitor extends SqlParserVisitor {
    constructor(sql) {
        super();
        this.sql = sql
    }

    getText(context) {
        if (!context.start) {
            assert.ok(context.symbol)
            return context.getText()
        }
        const {start} = context.start
        const {stop} = context.stop
        return this.sql.substring(start, stop + 1)
    }

}



/**
 * @typedef {Error} ANTLRError
 * @property {number} startLine
 * @property {number} endLine
 * @property {number} startCol
 * @property {number} endCol
 * @property {string} message
 */

import {GenericSQL, SqlParserVisitor, SqlParserListener} from 'dt-sql-parser';
import {FromContext} from './context.js'
import {consolePrintVisitor} from "./debug.js";

const parser = new GenericSQL();

/**
 * @throws {errors:ANTLRError[]}
 * @param sql
 */
export function validate(sql) {
    const errors = parser.validate(sql);
    if (errors.length > 0) {
        errors.forEach(err => console.error(err))
        const err = Error(JSON.stringify(errors))
        Object.assign(err, {errors})
        throw err
    }

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

export function bind(listener) {
    const tree = parser.parse(listener.sql)
    parser.listen(listener, tree);
}

export class AbstractVisitor extends SqlParserVisitor {
    constructor(sql) {
        super();
        this.sql = sql
    }

    getText(context) {
        return new FromContext(context).getText(this)
    }

    visitSqlStatement(ctx) {
        if (this.debug) {
            consolePrintVisitor(ctx, this)
        }
        super.visitSqlStatement(ctx);
    }

}

export class AbstractListener extends SqlParserListener {
    constructor(sql) {
        super();
        this.sql = sql
    }

    getText(context) {
        return new FromContext(context).getText(this)
    }

    enterSqlStatement(ctx) {
        if (this.debug) {
            consolePrintVisitor(ctx, this)
        }
        super.enterSqlStatement(ctx);
    }
}


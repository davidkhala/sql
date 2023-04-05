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

const defaultVisitor = (data, context) => {
    console.info(data)
}

export function traverse(sql, onTable = defaultVisitor, onSelect = defaultVisitor) {

    class AbstractVisitor extends SqlParserVisitor {
        // overwrite visitTableName
        visitTableName(context) {
            const tableName = context.getText()
            onTable(tableName, context)
        }

        // overwrite visitSelectElements
        visitSelectElements(context) {
            const selectElements = context.getText()
            onSelect(selectElements, context)
        }
    }

    const tree = parser.parse(sql)
    const visitor = new AbstractVisitor()
    visitor.visit(tree)

    return visitor
}




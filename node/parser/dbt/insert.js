import {expectTrace} from "../traverse.js";
import {getEnd} from "../context.js";
import {build} from "./configBlock.js";


export function processInsert(context, visitor) {
    const result = visitor.result.insert
    if (expectTrace(context, ['InsertStatementContext', 'UidListContext', 'UidContext'])) {
        result.uidList.push(visitor.getText(context))
    }
    if (expectTrace(context, ['InsertStatementContext', 'InsertStatementValueContext', 'SimpleSelectContext', 'QuerySpecificationContext', 'SelectElementsContext', 'SelectColumnElementContext'])) {
        result.selectColumnElementList.push(visitor.getText(context))
    }
    if (expectTrace(context, ['InsertStatementContext', 'InsertStatementValueContext', 'SimpleSelectContext', 'QuerySpecificationContext', 'FromClauseContext'])) {
        result.fromClause = {
            text: visitor.getText(context),
            stop: getEnd(context),
        }

    }
    if (expectTrace(context, ['InsertStatementContext', 'InsertStatementValueContext', 'SimpleSelectContext', 'QuerySpecificationContext', 'FromClauseContext', 'TableSourcesContext'])) {
        result.table = {
            text: visitor.getText(context),
            stop: getEnd(context),
        }
    }
}

export function reduceInsert(visitor) {
    const {uidList, selectColumnElementList, fromClause, table} = visitor.result.insert


    const part1 = uidList.map((uid, index) => `\t${selectColumnElementList[index]} AS ${uid}`).join(',\n')
    if (visitor.useRefTable) {
        return `${build(visitor.options)}
SELECT\n${part1}\nFROM {{ ref('${table.text}') }} ${visitor.sql.substring(table.stop, fromClause.stop).trim()}`
    } else {
        return `${build(visitor.options)}
SELECT\n${part1}\n${fromClause.text}`
    }

}

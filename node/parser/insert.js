import {expectTrace, traverseChildren} from "./traverse.js";
import {reduce} from "./dbt/insert.js";

export function insertVisitor(context, visitor) {
    visitor.result = {
        uidList: [],
        selectColumnElementList: [],
        fromClause: undefined,
    }

    traverseChildren(context, processInsert, visitor)

    visitor.dbt = reduce(visitor.result)
}


export function processInsert(context, visitor) {
    if (expectTrace(context, ['InsertStatementContext', 'UidListContext', 'UidContext'])) {
        visitor.result.uidList.push(visitor.getText(context))
    }
    if (expectTrace(context, ['InsertStatementContext', 'InsertStatementValueContext', 'SimpleSelectContext', 'QuerySpecificationContext', 'SelectElementsContext', 'SelectColumnElementContext'])) {
        visitor.result.selectColumnElementList.push(visitor.getText(context))
    }
    if (expectTrace(context, ['InsertStatementContext', 'InsertStatementValueContext', 'SimpleSelectContext', 'QuerySpecificationContext', 'FromClauseContext'])) {
        visitor.result.fromClause = visitor.getText(context)
    }
}

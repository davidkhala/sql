import {expectTrace} from "./traverse.js";
import {getEnd} from "./context.js";


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
            text:visitor.getText(context),
            stop: getEnd(context),
        }

    }
}

import {expectTrace} from "../traverse.js";
import {build} from './configBlock.js'

export function processDelete(context, visitor) {
    const result = visitor.result.delete
    if (expectTrace(context, ['SingleDeleteStatementContext', 'TableNameContext'])) {
        result.table = visitor.getText(context)
    }

    if (expectTrace(context, ['SingleDeleteStatementContext', 'PredicateExpressionContext']) ||
        expectTrace(context, ['SingleDeleteStatementContext', 'LogicalExpressionContext'])) {
        result.predicate = visitor.getText(context)
    }
}

export function reduceDelete(visitor) {
    const result = visitor.result.delete
    return `${build(visitor.options)}
WITH soft_deletes AS (
    SELECT
         *,
        CASE
            WHEN ${result.predicate} THEN true
            ELSE false
        END AS to_delete

    FROM {{ ref('${result.table}') }}

)

SELECT * FROM soft_deletes WHERE to_delete = false`
}

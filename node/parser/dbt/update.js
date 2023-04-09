// UPDATE orders
//  SET type = 'return'
// WHERE total < 0`

// SELECT
//     {{ dbt_utils.star(from=ref('stg_orders'), except=['type']) }},
//     CASE
//         WHEN total < 0 THEN 'return'
//         ELSE type
//     END AS type,
//
// FROM {{ ref('stg_orders') }}
import {expectTrace} from "../traverse.js";

export function processUpdate(context, visitor) {

    const result = visitor.result.update

    if (expectTrace(context, ['SingleUpdateStatementContext', 'TableNameContext'])) {
        result.table = visitor.getText(context)
    }
    if (expectTrace(context, ['SingleUpdateStatementContext', 'UpdatedElementContext'])) {
        const [key, value] = visitor.getText(context).split('=')
        result.columns[key.trim()] = value.trim()
    }
    if (expectTrace(context, ['SingleUpdateStatementContext', 'PredicateExpressionContext'])) {
        result.predicate = visitor.getText(context)
    }

}

export function reduceUpdate(visitor) {
    // SELECT
    //     {{ dbt_utils.star(from=ref('stg_orders'), except=['type']) }},
    //     CASE
    //         WHEN total < 0 THEN 'return'
    //         ELSE type
    //     END AS type,
    //
    // FROM {{ ref('stg_orders') }}
    const result = visitor.result.update
    const except = Object.keys(result.columns).map(key => `'${key}'`).join(',')
    const cases = Object.entries(result.columns).map(([key, value], index) => {
        return `\tCASE\n\t\tWHEN ${result.predicate} THEN ${value}\n\t\tELSE ${key}\n\tEND AS ${key}`
    }).join(',\n')
    return `SELECT\n\t{{ dbt_utils.star(from=ref('${result.table}'), except=[${except}]) }},\n${cases}\nFROM {{ ref('${result.table}') }}`
}

// SELECT
//     {{ dbt_utils.star(from=ref('stg_orders'), except=['type']) }},
//     CASE
//         WHEN total < 0 THEN 'return'
//         ELSE type
//     END AS type,
//
// FROM {{ ref('stg_orders') }}

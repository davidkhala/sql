


`take <#>`: view a sample of records
- like unordered `LIMIT`
  - `top` is closer to `LIMIT`
  - `| sort by <column> <asc|desc> | take <#>`is closer to `LIMIT`
- returns a specified number of **arbitrary rows** from the table

`project <column> <column> ...`: simplify the view and select a specific subset of columns.
- like `SELECT`

`distinct <column>`: list all of the unique values.

`sort by <column> <asc|desc>`
- default is `desc`

`extend` Creates calculated columns and append them to the result set.

# join
`join [kind=<flavor>] <expression>`
- [list of join flavor](https://learn.microsoft.com/en-us/kusto/query/join-operator?view=microsoft-fabric#returns)
  - No cross-join
- expression format
  - `<Table> on <common-column>`
  - `<Table> on $left.<origin-column> == $right.<joined-column>`

# aggregation functions

`summarize`
- groups together rows based on the `by` clause and then uses the provided aggregation function to combine each group in a single row.
- like `GROUP BY`

`make_set(column)` turn a selection of rows (i.e. column) in a table into an array of **unique values**.

`countif(condition_bool)`: Conditionally count rows

# bucketing
`bin(column, interval)` aggregate by numeric or time values
- like `DATE_TRUNC`

`case ("""""")` groups data into buckets based on specified conditions.

sliding window is not supported.
- [solution example](https://learn.microsoft.com/en-us/kusto/query/tutorials/use-aggregation-functions?view=microsoft-fabric#perform-aggregations-over-a-sliding-window)

# Visualize
`render <chart_type>`


# Ref
- [KQL quick reference](https://learn.microsoft.com/en-us/kusto/query/kql-quick-reference)
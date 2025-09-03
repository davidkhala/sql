


## query statement
- All query statements are separated by a `;` (semicolon)
- KQL is case-sensitive for everything
### tabular expression statement
- The most common kind
- both its input and output consist of tables or tabular datasets
- Each time the data passes through another operator, it's filtered, rearranged, or summarized.
  - **Operators** are sequenced by a | (pipe)
### let statement
A let statement is used to  
- set a variable name equal to 
  - an expression
  - a function: `let FunctionName = ([ Parameters ]) { FunctionBody }`
    - Parameters examples
      - `(val:long, n:long)`
      - Tabular argument
        - with schema: `(T: (State: string))`: table `T` must have a column `State` of type `string`
        - with wildcard: `(T: (*))`: table parameter `T` can have any schema
  - a view or virtual table(parameter-less): `let ViewName = view (){ FunctionBody }`
    - Note, the view is also included in scope of `union *` (union 用于合并多个表的数据。*表示当前会话中所有table和view)

- as alter of CTE

Dirty read
- The let statement binds a name to a calculation, not to the evaluated value of that calculation.
- multiple references to the same `let` name can return different values
- solution: `toscalar()`, `materialize()`.

`let cachedResult = materialize(materializedScope);`
- `materialize` lets you cache subquery results during the time of query execution

### set statement
The set statement is used to set a [request property} for the duration of the query.

Request properties: global configuration options
- control how a query executes and returns results.
- **latest**: Request properties aren't formally a part of the Kusto Query Language
  - it may be modified without being considered as a breaking language change.
- `set OptionName [= OptionValue]`
## Management commands
requests to Kusto to process(e.g. `.show`) or modify data or metadata
- a DDL
- > Management commands have their own syntax, which isn't part of the KQL syntax
  - the first character of the command is `.`

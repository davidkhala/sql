export function build(configs = {}) {

    const content = Object.entries(configs).map(([key, value]) => `${key}=${value}`).join(',\n\t\t')
    return `{{
    config(
        ${content}
    )
}}`
}

/**
 * https://docs.getdbt.com/docs/build/incremental-models
 * @param unique_key
 * @param exclude_columns
 * @returns {string}
 */
export function incrementalModel(unique_key,exclude_columns = [] ) {
    const configs = {
        materialized: 'incremental',
        unique_key,
        on_schema_change: 'sync_all_columns',
        incremental_strategy: 'merge',
        merge_exclude_columns: exclude_columns
    }
    return build(configs)
}



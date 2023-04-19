export function build(configs) {
    const content = Object.entries(configs).map(([key, value]) => `${key}=${value}`).join(',\n\t\t')
    return `{{
    config(
        ${content}
    )
}}`
}


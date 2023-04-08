export function getStart(context, visitor) {
    const {start, stop} = context.start
    return visitor.source.substring(start, stop + 1)
}

export function getStop(context, visitor) {
    const {start, stop} = context.stop
    return visitor.source.substring(start, stop + 1)
}

export const atomicClass = ['TableNameContext', 'UidContext', 'SelectColumnElementContext', 'TableSourcesContext', 'ExpressionAtomPredicateContext', 'ComparisonOperatorContext']

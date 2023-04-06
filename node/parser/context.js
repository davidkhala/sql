import assert from "assert";

export function getStart(context) {
    const {start, stop, source} = context.start
    const fullStr = source[1].strdata
    return fullStr.substring(start, stop + 1)
}

export function getStop(context) {
    const {start, stop, source} = context.stop
    const fullStr = source[1].strdata
    return fullStr.substring(start, stop + 1)
}
export function getText(context) {
    if (!context.start) {
        assert.ok(context.symbol)
        return context.getText()
    }
    const {start, source} = context.start
    const {stop} = context.stop
    const fullStr = source[1].strdata
    return fullStr.substring(start, stop + 1)
}

export const atomicClass = ['TableNameContext', 'UidContext', 'SelectColumnElementContext', 'TableSourcesContext', 'ExpressionAtomPredicateContext', 'ComparisonOperatorContext']

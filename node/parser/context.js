import assert from "assert";

export class FromContext {
    constructor(context) {
        Object.assign(this, {context})
    }

    getStart({sql}) {
        const {start, stop} = this.context.start
        return sql.substring(start, stop + 1)
    }

    getEnd() {
        return this.context.stop.stop + 1
    }

    getStop({sql}) {
        const {start} = this.context.stop
        return sql.substring(start, this.getEnd())
    }

    getText({sql}) {
        const {context} = this
        if (!context.start) {
            assert.ok(context.symbol)
            return context.getText()
        }
        const {start} = context.start
        return sql.substring(start, this.getEnd())
    }
}

export const atomicContextClassSet = new Set(['TableNameContext', 'UidContext', 'SelectColumnElementContext', 'TableSourcesContext', 'ExpressionAtomPredicateContext', 'ComparisonOperatorContext', 'FullColumnNameContext'])

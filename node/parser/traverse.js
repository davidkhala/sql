import {atomicContextClassSet} from "./context.js";

export function traverseChildren(context, processChild, visitor) {
    const className = context.constructor.name
    if (context.children && !atomicContextClassSet.has(className)) {
        for (const child of context.children) {
            processChild(child, visitor)
            traverseChildren(child, processChild, visitor)
        }
    }
}

export function expectTrace(context, expectedTrace) {
    return expectedTrace.length === 0 || context.constructor.name === expectedTrace.pop() && expectTrace(context.parentCtx, expectedTrace)
}

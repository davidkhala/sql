import {traverseChildren} from './traverse.js'

export function consolePrintVisitor(context, visitor) {
    context.prefix = [context.constructor.name]

    const processChild = (child) => {
        const parentContext = child.parentCtx
        child.prefix = [...parentContext.prefix, '->', child.constructor.name]
        console.debug(...child.prefix, visitor.getText(child))

    }
    traverseChildren(context, processChild, visitor)

}

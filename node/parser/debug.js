import {getText} from './context.js'
import {traverseChildren} from './traverse.js'

export function consolePrintVisitor(context) {
    context.prefix = [context.constructor.name]
    const acceptChild = () => true
    const processChild = (child, parentContext) => {
        child.prefix = [...parentContext.prefix, '->', child.constructor.name]
        console.debug(...child.prefix, getText(child))

        traverseChildren(child, acceptChild, processChild)
    }
    traverseChildren(context, acceptChild, processChild)

}

import {getText} from './sql.js'
export function listChildren(context, prefix = [context.constructor.name]) {
    const className = context.constructor.name
    if (context.children && !['TableNameContext', 'UidContext', 'SelectColumnElementContext', 'TableSourcesContext', 'ExpressionAtomPredicateContext', 'ComparisonOperatorContext'].includes(className)) {
        for (const child of context.children) {
            console.debug(...prefix,'->', child.constructor.name, getText(child))
            listChildren(child, [...prefix, '->', child.constructor.name])
        }

    }
}

export function consolePrintVisitor(context) {
    console.info(context.constructor.name, getText(context))
    listChildren(context)

}

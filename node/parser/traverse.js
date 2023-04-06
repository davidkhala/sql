import {atomicClass} from "./context.js";

export function traverseChildren(context, acceptChild, processChild) {
    const className = context.constructor.name
    if (context.children && !atomicClass.includes(className)) {
        for (const child of context.children) {
            if (acceptChild(child, context)) {
                processChild(child, context)
            }
        }

    }
}

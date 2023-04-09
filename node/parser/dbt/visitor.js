import {AbstractVisitor} from "../sql.js";
import {processInsert, reduceInsert} from "./insert.js";
import {consolePrintVisitor} from "../debug.js";
import {traverseChildren} from "../traverse.js";
import {processUpdate, reduceUpdate} from "./update.js";

export class DBTVisitor extends AbstractVisitor {
    constructor(sql, {useRefTable = true} = {}) {
        super(sql);
        Object.assign(this, {useRefTable, result: {}})
    }

    visitInsertStatement(ctx) {
        this.result.insert = {
            uidList: [],
            selectColumnElementList: [],
            fromClause: undefined,
            table: undefined,
        }

        traverseChildren(ctx, processInsert, this)
        this.dbt = reduceInsert(this)

        return super.visitInsertStatement(ctx)
    }

    visitUpdateStatement(ctx) {
        this.result.update = {
            columns: {},
        }
        traverseChildren(ctx, processUpdate, this)
        this.dbt = reduceUpdate(this)
        return super.visitUpdateStatement(ctx);
    }

    visitDdlStatement(context) {
        consolePrintVisitor(context, this)
        return super.visitDdlStatement(context)
    }


}

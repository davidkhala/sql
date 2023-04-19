import {AbstractVisitor} from "../sql.js";
import {processInsert, reduceInsert} from "./insert.js";
import {consolePrintVisitor} from "../debug.js";
import {traverseChildren} from "../traverse.js";
import {processUpdate, reduceUpdate} from "./update.js";
import {processDelete, reduceDelete} from "./delete.js";

export class DBTVisitor extends AbstractVisitor {
    constructor(sql, {useRefTable = true, debug = false, options} = {}) {
        super(sql);
        Object.assign(this, {useRefTable, debug, result: {}, options})
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

    visitDeleteStatement(ctx) {
        this.result.delete = {}
        traverseChildren(ctx, processDelete, this)
        this.dbt = reduceDelete(this)
        return super.visitDeleteStatement(ctx);
    }

    visitSqlStatement(ctx) {
        if (this.debug) {
            consolePrintVisitor(ctx, this)
        }
        return super.visitSqlStatements(ctx);
    }

    visitDdlStatement(ctx) {

        return super.visitDdlStatement(ctx)
    }


}

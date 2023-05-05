import {AbstractListener} from "../sql.js";
import {processInsert, reduceInsert} from "./insert.js";
import {traverseChildren} from "../traverse.js";
import {processUpdate, reduceUpdate} from "./update.js";
import {processDelete, reduceDelete} from "./delete.js";

export class DBTListener extends AbstractListener {
    constructor(sql, {useRefTable = true, debug = false, options} = {}) {
        super(sql);
        Object.assign(this, {useRefTable, debug, result: {}, options})
    }

    enterInsertStatement(ctx) {
        this.result.insert = {
            uidList: [],
            selectColumnElementList: [],
            fromClause: undefined,
            table: undefined,
        }

        traverseChildren(ctx, processInsert, this)
        this.dbt = reduceInsert(this)
        super.enterInsertStatement(ctx);
    }

    enterUpdateStatement(ctx) {
        this.result.update = {
            columns: {},
        }
        traverseChildren(ctx, processUpdate, this)
        this.dbt = reduceUpdate(this)
        super.enterUpdateStatement(ctx);
    }

    enterDeleteStatement(ctx) {
        this.result.delete = {}
        traverseChildren(ctx, processDelete, this)
        this.dbt = reduceDelete(this)
        super.enterDeleteStatement(ctx);
    }


}

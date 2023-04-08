import {AbstractVisitor} from "../sql.js";
import {processInsert} from "../insert.js";
import {consolePrintVisitor} from "../debug.js";
import {traverseChildren} from "../traverse.js";

export class DBTVisitor extends AbstractVisitor {
    constructor(sql, {useRefTable = true} = {}) {
        super(sql);
        Object.assign(this, {useRefTable, result: {}})
    }

    visitInsertStatement(context) {
        this.result.insert = {
            uidList: [],
            selectColumnElementList: [],
            fromClause: undefined,
            table: undefined,
        }

        traverseChildren(context, processInsert, this)
        this.dbt = this.reduceInsert()

        return super.visitInsertStatement(context)
    }

    visitDdlStatement(context) {
        consolePrintVisitor(context, this)
        return super.visitDdlStatement(context)
    }

    reduceInsert() {
        const {uidList, selectColumnElementList, fromClause, table} = this.result.insert


        const part1 = uidList.reduce((sum, uid, index) => {
            sum += `\t${selectColumnElementList[index]} AS ${uid}${index === uidList.length - 1 ? '' : ','}\n`

            return sum
        }, '')
        if (this.useRefTable) {
            return `SELECT\n${part1}FROM {{ ref('${table.text}') }}${this.sql.substring(table.stop, fromClause.stop)}`
        } else {
            return `SELECT\n${part1}${fromClause.text}`
        }

    }

}

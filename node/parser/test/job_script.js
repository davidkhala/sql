import { traverse } from "../sql.js";
import { DBTVisitor } from '../dbt/visitor.js'
import assert from "assert";
describe('CRM_MCIF_WS0124', () => {
    it('insert-select-from', () => {
        const sql = `Insert into $MCIF_DB.Appl_Deletion_List
        (
            Appl_Nbr
            ,Delete_Dte
            ,Delete_Type
        )
        select 
            Appl_Nbr
            ,cast( '$job_order_date' as date format 'yyyymmdd' )
            ,'1'
        from $LOAD_DB.Deletion_List_aps_tws0121
        where (Appl_Nbr) not in 
        (
            Select 
                Appl_Nbr 
            from $MCIF_DB.Appl_Deletion_List
            where Delete_dte = cast( '$job_order_date' as date format 'yyyymmdd' )
            and Delete_Type = '1'
        )
        ;`
        const visitor = new DBTVisitor(sql, { useRefTable: false })
        traverse(visitor)
        console.debug(visitor.dbt)
    })
})
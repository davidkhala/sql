import {validate} from "../sql.js";
import assert from "assert";

describe('CRM_MCIF_WS0124', () => {
    it('insert-select-from:raw', () => {
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
        const assertMsg = `
        teradata:
        CAST permits the use of data attributes, such as the FORMAT phrase that enables alternative formatting for the date data.
        https://docs.teradata.com/r/kmuOwjp1zEYg98JsB8fu_A/3p451k4ev~Sx~dDp_QXM6g
        `
        assert.throws(() => {
            validate(sql)
        }, assertMsg)

    })
    it('insert-select-from: table variable', () => {
        const staticValue = `'20230415'` // cast( '$job_order_date' as date format 'yyyymmdd' )
        const sql = `Insert into $MCIF_DB.Appl_Deletion_List
        (
            Appl_Nbr
            ,Delete_Dte
            ,Delete_Type
        )
        select 
            Appl_Nbr
            ,${staticValue}
            ,'1'
        from $LOAD_DB.Deletion_List_aps_tws0121
        where (Appl_Nbr) not in 
        (
            Select 
                Appl_Nbr 
            from $MCIF_DB.Appl_Deletion_List
            where Delete_dte = ${staticValue}
            and Delete_Type = '1'
        )
        ;`

        assert.doesNotThrow(() => validate(sql))
    })
})
import {validate} from "../sql.js";
import assert from "assert";

describe('teradata incompatible', ()=>{
    it('collect statistics', ()=>{
        const query = `COLLECT STATISTICS ON collection_source`
        assert.throws(()=>validate(query))
    })
})

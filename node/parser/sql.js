import { GenericSQL } from 'dt-sql-parser';
import * as assert from "assert";

const parser = new GenericSQL();

export function parse(sql){
    const errors = parser.validate(sql);
    assert.equal(errors.length, 0)
}



import {parse, validate, traverse} from '../sql.js'
describe('sql parser', function () {
    const correctSql = 'SELECT id,name from user1;';
    it('', () => {
        validate(correctSql)
    })
    it('tokenize', () => {
        const tokens = parse(correctSql, true)
        console.info(tokens)
    })
    it('traverse', ()=>{
        traverse(correctSql)
    })
});

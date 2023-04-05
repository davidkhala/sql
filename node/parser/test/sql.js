import {parse} from '../sql.js'
describe('sql parser', function () {
    it('', ()=>{
        const correctSql = 'select id,name from user1;';
        parse(correctSql)
    })
});

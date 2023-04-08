export function reduce(result) {
    const {uidList, selectColumnElementList, fromClause} = result
    const part1 = uidList.reduce((sum, uid, index) => {
        sum += `\t${selectColumnElementList[index]} AS ${uid}${index === uidList.length - 1 ? '' : ','}\n`

        return sum
    }, '')
    return `SELECT\n${part1}${fromClause}`

}

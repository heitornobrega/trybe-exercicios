function sumArray(array) {
    let num = 0;
    for (let c = 0; c < array.length; c += 1){
        num += parseInt(array[c]); 
    }
    return num;
}
function hydrate(texto) {
    const regex = /[0-9]/g;
    const found = texto.match(regex);
    const total = sumArray(found);
    if (total === 1) return `1 copo de água`;
    return `${total} copos de água`
}
 
console.log(hydrate('1 cerveja'))
module.exports = hydrate;
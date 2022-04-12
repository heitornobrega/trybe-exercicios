const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const uneListas = (array, array2) => array.map((element, index) => ({ [element]: array2[index]}));

console.log(uneListas(products, prices));


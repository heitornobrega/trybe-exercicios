const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pegaPares = (element) => element % 2 === 0;
const somaNums = (acc, element) => acc + element;

const somaPares = (array) => array.filter(pegaPares).reduce(somaNums);

console.log(somaPares(numbers));
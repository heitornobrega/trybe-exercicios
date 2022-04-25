const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pegaPares = (element) => element % 2 === 0;
const somaNums = (acc, element) => acc + element;

const somaPares = (array) => array.filter(pegaPares).reduce(somaNums);

console.log(somaPares(numbers));

const sum2 = (acc, element) => (
    (element % 2 === 0) ? acc + element : acc // se o elemento atual for par, some, caso contrario mantenha acc como é;
);

const newSum = (array) => array.reduce(sum2);

console.log(newSum(numbers));
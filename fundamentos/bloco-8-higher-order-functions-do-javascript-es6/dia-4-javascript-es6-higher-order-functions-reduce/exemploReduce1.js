const numbers = [32, 15, 3, 2, -5, 56, 10];
const arraySum = (array) => array.reduce((acc, num) => acc + num, 0);
console.log(arraySum(numbers));

const getSum = (acc, element) => acc + element;
const sumNumbers = numbers.reduce(getSum);

console.log(sumNumbers);
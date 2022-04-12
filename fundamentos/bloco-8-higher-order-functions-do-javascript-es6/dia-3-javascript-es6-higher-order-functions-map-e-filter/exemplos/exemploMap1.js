const numbers = [1, 2, 3, 4, -5];

const makeArrayNegative = (array) => array.map((numero) => numero < 0 ? numero = numero : numero *= -1)

const negativeNumbers = makeArrayNegative(numbers);

console.log(negativeNumbers);
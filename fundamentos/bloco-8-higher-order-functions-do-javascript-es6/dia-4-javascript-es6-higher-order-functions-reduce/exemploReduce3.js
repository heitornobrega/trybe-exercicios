const numbers = [50, 85, -30, 3, 15];

const getBigger = (acc, element) => ((acc > element) ? acc : element);

console.log(numbers.reduce(getBigger));

console.log(numbers.reduce(getBigger, 100));
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (acc, element) => {
    console.log(acc)
    return acc + element;
};
console.log(numbers.reduce(getSum, 0))
console.log(numbers.reduce(getSum, 10))
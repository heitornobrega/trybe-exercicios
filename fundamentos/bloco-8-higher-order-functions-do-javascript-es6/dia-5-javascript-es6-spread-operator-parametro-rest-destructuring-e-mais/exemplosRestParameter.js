function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(quantosParams(0, 1, 2));
console.log(quantosParams('string', null, [1, 2, 3], {}));

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(1, 2, 3, 4, 5, 6, 7, 9, 8));

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'laranja', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['aveia', 'castanha-de-caju', 'leite condensado'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));
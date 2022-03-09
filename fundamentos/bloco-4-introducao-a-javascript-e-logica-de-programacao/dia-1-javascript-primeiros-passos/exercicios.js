// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo
// com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
const a = 10;
const b = 2;

soma = a + b;
console.log('Soma: ' + soma);

diferenca = a - b;
console.log('Difença: ' + diferenca);

produto = a * b;
console.log('Multiplicação: '  + produto);

divisao = a / b;
console.log('Divisão: ' + divisao);

resto = a % b;
console.log('Módulo: ' + resto);

// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const valor1 = 2;
const valor2 = 1;

console.log(`O valor 1 é igual a ${valor1} e o valor 2 igual a ${valor2}.`)
var resultado = undefined;
if (valor1 > valor2){
    resultado = "maior";
}else{
    resultado = "menor";
}
console.log(`O valor 1 é ${resultado} que o valor 2`);

// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const valor3 = 5;
var resultado = undefined;
if(valor1 > valor2 && valor2 > valor3){
    resultado = "Valor 1";
}
else if(valor2 > valor1 && valor1 > valor3){
    resultado = "Valor 2";
}else{
    resultado = "Valor 3";
}
console.log(`O maior dentre os três valores é o ${resultado}`);

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for
// negativo e "zero" caso contrário.

const v1 = 0;
var resultado = undefined;
if(v1 > 0){
    resultado = "positive";
}
else if(v1 < 0){
    resultado = "negative";
}else{
    resultado = "zero";
}
console.log(`The value is ${resultado}.`)

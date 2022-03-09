# Exercicios/4.1 

#### 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

<ul>
<li>Adição (a + b)</li>
<li>Subtração (a - b) </li>
<li>Multiplicação (a * b) </li>
<li>Divisão (a / b)</li>
<li>Módulo (a % b) </li>
</ul>

~~~js
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
~~~
> output: <br> `Soma: 12` <br> `Difença: 8`<br> `Multiplicação: 20`<br> `Divisão: 5`<br> `Módulo: 0`<br>

#### 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

~~~js
const valor1 = 8;
const valor2 = 987;

console.log(`O valor 1 é igual a ${valor1} e o valor 2 igual a ${valor2}.`)
var resultado = undefined;
if (valor1 > valor2){
    resultado = "maior";
}else{
    resultado = "menor";
}
console.log(`O valor 1 é ${resultado} que o valor 2`);
~~~
> output: <br> `O valor 1 é igual a 8 e o valor 2 igual a 987.` <br> `O valor 1 é menor que o valor 2` <br>

#### 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
~~~js
const valor1 = 2;
const valor2 = 1;
const valor3 = 5;

if(valor1 > valor2 && valor2 > valor3){
    resultado = "Valor 1";
}
else if(valor2 > valor1 && valor1 > valor3){
    resultado = "Valor 2";
}else{
    resultado = "Valor 3";
}
console.log(`O maior dentre os três valores é o ${resultado}`)
~~~
>output: <br> O maior dentre os três valores é o Valor 3 <br>

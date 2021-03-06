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

/*
Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.
Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 
*/

const ang1 = 0;
const ang2 = 45;
const ang3 = 45;
var triangulo = ang1 + ang2 + ang3;
if(ang1 <= 0 || ang2 <= 0 || ang3 <= 0){
    console.log(`[ERRO] Somente valores positivos são aceitos.`)
}else{
    if(triangulo != 180){
        console.log(false);
    }else{
        console.log(true);
    }
}

/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas
quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
*/

const peca = "ToRre"
switch (peca.toLocaleLowerCase()) {
    case "bispo":
        console.log("O Bispo pode se movimentar uma ou mais casas pelo tabuleiro, mas esta peça se movimenta somente pelas diagonais pelo tabuleiro. ");
        break;
    case "rei":
        console.log("O Rei pode se movimentar em qualquer direção (na horizontal, na vertical, ou na diagonal) mas somente uma casa por lance.");
        break;
    case "rainha":
        console.log("A Rainha pode se movimentar uma ou mais casas pelo tabuleiro, em qualquer direção.");
        break;
    case "cavalo":
        console.log("A movimentação do cavalo é feita em forma de 'L', ou seja, anda 2 casas em qualquer direção (vertical ou horizontal) e depois mais uma em sentido perpendicular ao movimento inicial.");
    case "torre":
        console.log("A Torre pode se movimentar uma ou mais casas pelo tabuleiro, mas somente de forma horizontal (linhas do tabuleiro) ou vertical (colunas do tabuleiro). ");
        break;
    case "peão":
        console.log("O o peão se movimenta para frente, porém captura nas diagonais");
        break;
    default:
        console.log("[ERRO] Insira uma peça de xadrez válida.");
};
/* 
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/
var nota = 0;
if(nota > 100 || nota < 0){
    console.log("Nota inválida, o programa será encerrado.")
}else{
    if(nota < 50){
        conceito = "F";
    } else if(nota >= 50 && nota < 60){
        conceito = "E";    
    } else if(nota >= 60 && nota < 70){
        conceito = "D";
    } else if(nota >= 70 && nota < 80){
        conceito = "C";
    } else if(nota >= 80 && nota < 90){
        conceito = "B";
    } else{
        conceito = "A";
    }
    console.log(`A nota obtida foi ${nota} e equivale ao conceito ${conceito}.`)
};
/*
8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/
const n1 = 2;
const n2 = 5;
const n3 = 7;

let isEven = false;

if(n1%2 === 0 || n2%2 === 0 || n3%2 === 0){
    isEven = true;
};
console.log(isEven);

/*
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar.
Caso contrário, ele retorna false .
*/

const o1 = 9;
const o2 = 2;
const o3 = 8;

let isOdd = false;

if(o1%2 !== 0 || o2%2 !== 0 || o3%2 !== 0){
    isOdd = true;
};

console.log(isOdd);

/* 
10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda.
A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
    > Atente que, sobre o custo do produto, incide um imposto de 20%.
    > Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
    > O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz
    parte do valor de custo.
        > valorCustoTotal = valorCusto + impostoSobreOCusto
        > lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/

const custoProduto = 5;
const vendaProduto = 12;

if(custoProduto >= 0 || vendaProduto >= 0){
    const valorCustoTotal = custoProduto + (custoProduto * 0.2);
    const lucro = (vendaProduto - valorCustoTotal) * 1000;
    console.log(`O lucro é ${lucro}`);
}else{
    console.log("[ERRO] Valores negativos não são aceitos, o programa será encerrado.")
}

var salarioDev = 3000;
if(salarioDev >+ 5189.82){
    var aliquotaInss = 570.88;
}else if(salarioDev >= 2594.93 && salarioDev < 5189.82){
    var aliquotaInss = salarioDev * 0.11; 
}else if(salarioDev >= 1556.95 && salarioDev < 2594.92){
    var aliquotaInss = salarioDev * 0.09;
}else if(salarioDev <= 2594.92){
    var aliquotaInss = salarioDev * 0.09;
};

salarioDev -= aliquotaInss;
if(salarioDev >= 4664.68){
   var parcela = 869.36;
   var aliquotaIr = (salarioDev * 0.275) - parcela;
}else if(salarioDev >= 3751.06 && salarioDev < 4664.68){
    var parcela = 636.13;
    var aliquotaIr = (salarioDev * 0.225) - parcela;
}else if(salarioDev >= 2826.66 && salarioDev < 3751.06){
    var parcela = 354.80;
    var aliquotaIr = (salarioDev * 0.15) - parcela;
    
}else if(salarioDev >= 1903.99 && salarioDev < 2826.65){
    var parcela = 142.80;
    var aliquotaIr = (salarioDev * 0.075) - parcela;    
};
salarioDev -= aliquotaIr;
console.log(salarioDev) 
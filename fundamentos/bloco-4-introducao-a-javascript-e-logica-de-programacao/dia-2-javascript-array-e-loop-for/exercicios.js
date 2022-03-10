let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for(c in numbers){
    console.log(numbers[c]);
};
// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
listSum = 0;
for(c in numbers){
    listSum += numbers[c];
}
console.log(`A soma da lista é ${listSum}.`)

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

mean = (listSum/numbers.length);
console.log(`A média dos valores é ${mean}`);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem:
// "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(mean > 20){
    console.log("Valor maior que 20");
}else{
    console.log("Valor menor ou igual a 20");
};

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
bigger = 0;
for(c in numbers){
    if(numbers[c] > bigger){
        bigger = numbers[c];
    };
};
console.log(`O maior valor no array é ${bigger}.`);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado.
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

isOdd = [];
for(c in numbers){
    if(numbers[c] % 2 !== 0){
        isOdd.push(numbers[c]);
    };
};
if(isOdd.length === 0){
    console.log("Nenhumn valor ímpar encontrado");
} else{
    console.log(`Os números ímpares são: ${isOdd}`);
}

// 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

smaller = 0;
for(c in numbers){
    if(numbers[c] < smaller){
        smaller = numbers[c];
    };
};
console.log(`O menor valor do array é ${smaller}.`);
// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
array=[];
for(c = 1; c <= 25; c++){
    array.push(c);
}
console.log(array);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
dividido = [];
for(c in array){
    dividido.push(array[c]/2);
}
console.log(dividido);

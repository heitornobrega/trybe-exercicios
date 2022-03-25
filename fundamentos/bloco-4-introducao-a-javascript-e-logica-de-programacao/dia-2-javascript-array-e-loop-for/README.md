# Exercicios 4.2
#### 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

~~~js
for(c in numbers){
    console.log(numbers[c]);
};
~~~
>output: <br>
>5 <br>
>9<br>
>3<br>
>19<br>
>70<br>
>8<br>
>100<br>
>2<br>
>35<br>
>27<br>

#### 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

~~~js
listSum = 0;
for(c in numbers){
    listSum += numbers[c];
}
~~~
>output: <br> A soma da lista é 278.

#### 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
~~~js
mean = (listSum/numbers.length);
console.log(`A média dos valores é ${mean}`);
~~~
>output: <br> A média dos valores é 27.8

#### 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

~~~js
if(mean > 20){
    console.log("Valor maior que 20");
}else{
    console.log("Valor menor ou igual a 20");
};
~~~
>output: <br> Valor maior que 20

#### 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

~~~js
bigger = 0;
for(c in numbers){
    if(numbers[c] > bigger){
        bigger = numbers[c];
    };
};
~~~
>output: <br> O maior valor no array é 100.

#### 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor par encontrado";

~~~js
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

~~~
>output: <br> Os números ímpares são: 5,9,3,19,35,27

#### 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

~~~js
smaller = 0;
for(c in numbers){
    if(numbers[c] < smaller){
        smaller = numbers[c];
    };
};
~~~
>output: <br> O menor valor do array é 0.

#### 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

~~~js
array=[];
for(c = 1; c <= 25; c++){
    array.push(c);
}
console.log(array);
~~~
>output: <br>
>[<br>
>   1,  2,  3,  4,  5,  6,  7,  8,<br>
>   9, 10, 11, 12, 13, 14, 15, 16,<br>
>  17, 18, 19, 20, 21, 22, 23, 24,<br>
>  25<br>
>]<br>

#### 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

~~~js
dividido = [];
for(c in array){
    dividido.push(array[c]/2);
}
console.log(dividido);
~~~
>output: <br> 
>[<br>
>   0.5,  1,  1.5,  2,  2.5,  3,<br>
>   3.5,  4,  4.5,  5,  5.5,  6,<br>
>   6.5,  7,  7.5,  8,  8.5,  9,<br>
>   9.5, 10, 10.5, 11, 11.5, 12,<br>
>  12.5<br>
>]<br>


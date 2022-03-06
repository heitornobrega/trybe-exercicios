# Exercicios/3.3 

## Modelo de caixas

Existem tags HTML que trabalham como modelo de blocos, como a tag `spam`, e otras tags que trabalham como modelo de blocos, como a tag `div`.

A propriedadade overflow no css torna o tamnho da página mais dinâmico e cria uma barra de rolagem para adaptação.

Todo conteúdo no HTML é uma caixa, tal caixa pode ter seus elementos manipulados atravéz do css. A imagem a baixo é uma representação do modelo de caixas.

inserir a imagem aqui

## Posicionamento de elementos

A tag `img` é do tipo inline, ou seja, ela posiciona os elementos uns ao lado dos outros.

Os atributos `position` e `z-index` permitem manipular a posição de elementos.

A propriedade `absolute` permite posicionar qualquer elemento de acordo com o elento pai que tenhaa um `position` diferente.

O `z-index` estabele camadas de posicionamento.

A propriedade `float` torna um elemento fluutante, e assim permite que outras estruturas se organizem em torno dele.

### Exercícios de fixação 3.3

> inserir img original

#### 1 - Posicione o Mário acima do Goomba.

~~~css
.super-mario {
    width: 200px;
    position: absolute;
    z-index: 1;
  }
  
  .goomba {
    width: 100px;
    position: absolute;
    top: 338px;
    left: 115px;
    z-index: 2;
  }

~~~
> Output:
> img ex1

#### 2 - Posicione a tag p para que fique dentro do balão de fala.

~~~css
.super-mario {
    width: 200px;
    position: absolute;
    z-index: 1;
  }
  
  .goomba {
    width: 100px;
    position: absolute;
    top: 338px;
    left: 115px;
    z-index: 2;
  }

  .baloon {

}

.speach {
    position: absolute;
  font-size: 25px;
  top: 120px;
  left: 225px;
}

.bowser {
  width: 200px;
}
~~~
> output:
> img ex 2

#### 3 - Posicione o balão para que se torne uma fala de Bowser.

~~~css
.super-mario {
    width: 200px;
    position: absolute;
    z-index: 1;
  }
  
  .goomba {
    width: 100px;
    position: absolute;
    top: 338px;
    left: 115px;
    z-index: 2;
  }

  .baloon {
    position: absolute;
    left: 225px;
    z-index: 3;

}

.speach {
    position: absolute;
  font-size: 25px;
  top: 120px;
  left: 245px;
  z-index: 4;
}

.bowser {
    position: absolute;
  width: 200px;
  left: 500px;
  top: 200px;
}
~~~
> output:
> img 03

## Agrupamento de seletores e pseudoclasses

No css é possível agrupar elementos, fazendo que que diferenes elementos HTML compartilhem o mesmo estilo. Para fazer isso é necessário separar os elementos por vírgula.

Pseudoclasses são classes aplicadas diretamento no CSS, elas não existem no documento HTML. A sintxe de uso é o dois pontos (:). Dois exeplos de psudoclasses são: `hover` e `active`. Ambas são ativadas sob a interação do usuário, a `hover` funciona quando o mouse passa por cima do elemento associado a ela, enquanto que `active` funciona quando o usuário clica sobre o elemento associado.

### Para fixar I

#### 1 - Adicione uma lista ordenada dos 3 melhores sites que você conhece.

> input: 

~~~html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Agrupando Seletores</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Lista dos Melhores Sites que já vi</h1>
    <p>Top 3 dos melhores sites que existem na web</p>
    <p>Principais motivos para eu gostar deles</p>
  </body>
</html>
~~~

> output: 

~~~html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Agrupando Seletores</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Lista dos Melhores Sites que já vi</h1>
    <p><ol>
        <li>Youtube</li>
        <li>Google</li>
        <li>Instagram</li>
    </ol></p>
    <p>Principais motivos para eu gostar deles</p>
  </body>
</html>
~~~
#### 2 - Crie um arquivo no mesmo diretório e nomeie-o de 'style.css'.
~~~bash
touch style.css
~~~

#### 3 - Nesse arquivo .css, adicione os estilos para que:
<ol>
<li>O texto das tags 'h1' e 'p' estejam centralizados.</li>
<li>A cor de fundo da sua lista mude quando o cursor estiver sobre o item..</li>
<li>A fonte do item mude quando ele for clicado.</li>
</ol>

~~~css
h1, p {
    text-align: center;
}
li:hover{
    background-color: aqua;
}
li:active{
    color: red;
}
~~~

#### 4 - Adicione uma lista não ordenada com, pelo menos, 3 características que você gosta.

~~~html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Agrupando Seletores</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Lista dos Melhores Sites que já vi</h1>
    <p><ol>
        <li>Youtube</li>
        <li>Google</li>
        <li>Instagram</li>
    </ol></p>
    <p>Principais motivos para eu gostar deles</p>
    <ol>
        <li>Diversidade no conteúdo</li>
        <li>Interface limpa e bem montada</li>
        <li>Fácil de interagir</li>
    </ol>
  </body>
</html>
~~~

#### 5 - No 'style.css', adicione a propriedade 'list-style: none' para ambas as listas.

~~~css
h1, p {
    text-align: center;
}

li:hover{
    background-color: aqua;
}

li:active{
    color: red;
}

ol, ul{
    list-style: none;
}
~~~

### Para fixar II

>Para o próximo exercício, você não deve atribuir nenhuma classe ou id aos componentes, mas apenas utilizar pseudoclasses para individualizar cada elemento!

>input:

~~~html

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Pseudoclasses</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Paleta de Cores</h1>
  <p>Vamos criar uma paleta de cores com as divs abaixo:</p>
  <div>
    <h3>Cor primária</h3>
  </div>
  <div>
    <h3>Cor Secundária</h3>
  </div>
  <div>
    <h3>Cor Complementar</h3>
  </div>
  <div>
    <h3>Cor Escura</h3>
  </div>
  <div>
    <h3>Cor Clara</h3>
  </div>
</body>
</html>

~~~

#### 1 - Estilize as divs para que, ao passar o cursor por cima das mesmas, elas ganhem uma borda.

~~~css

div:hover{
    border-style: solid;
    border-width: 1px;
    border-color: black;

~~~

#### 2 - Faça cada div ter uma cor própria.

~~~css
/* Utilizando o nth-of-type() para  encontrar os elementos de mesmo tipo com base em sua posição entre irmãos */

div:nth-of-type(1) {
    background-color: red;
  }
  
  div:nth-of-type(2) {
    background-color: green;
  }
  
  div:nth-of-type(3) {
    background-color: yellow;
  }
  
  div:nth-of-type(4) {
    background-color: grey;
  }
  
  div:nth-of-type(5) {
    background-color: lightblue;
  }
~~~

#### 3 - Estilize cada uma das tags h3.
~~~css
/* Utilizando seletor descendente direto para manipular o h3 dentro da div*/

  div:nth-of-type(2) > h3 {
      color: blue;
  }

  div:nth-of-type(3) > h3{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  }

  div:nth-of-type(4) > h3{
      font-size: 12px;
  }
  div:nth-of-type(5) > h3{
      font-style: italic;
  }

~~~
#### 4 - Faça a terceira div ser maior que as demais.
~~~css

  /* Fazendo a terceira div ser maior que as demais */

  div:nth-of-type(3) {
      padding: 3em;
  }
  
~~~

#### 5 - Deixe as tags ímpares h3 com o texto em itálico.

~~~css
/* Utilizando nth-child(odd) para selecionar as tags impares filhas de div*/

div:nth-child(odd) h3{
    font-style: italic;
}

~~~

## Combinações e Classes Descendentes

  No CSS é possível selecionar todos os elementos através de uma classe compartilhada, ou ainda, selecionar somente os elementos que possuem uma classe específica. Exemplo:

  ~~~css
  p.classeGenerica{
    font-style: italic;
  }
  ~~~
No código acima, somente os parágrafos que possuem a classe `classeGenerica` serão selecinados.

Também é possível selecionar classes descendentes, como por exemplo:

~~~css
ul li p {
  background-color: green; 
}
~~~
No código acima, todos os parágrafos, dentro de um item lista, dentro de uma lista não ordenada serão selecionados e terão a cor de fundo alterada para verde.

Também é possível combinar as duas últimas notações, selecionando itens específicos, atrvés do uso de classes. Por exemplo:

~~~css
ul.algumaClasse li p {
  background-color: green; 
}
~~~

No código acima, somente as listas não ordenadas pertecentes a classe `algumaClasse` serão selecionadas, e assim, os parágrafos internos aos itens de listas terão seus fundos alterados para verde.

### Para fixar

#### 1 - Faça com que todos os itens de Listas Ordenadas tenham uma cor de fundo amarela. Se a numeração do item for PAR, faça a cor de fonte ser verde. Se o número for considerado ÍMPAR, utilize a propriedade text-transform para deixar o texto maiúsculo. (Dica: combinar classes pode ser útil aqui).
~~~css
 ol li {
     background-color: yellow;
 }

 ol li:nth-child(even){
     color: green;
 }
 ol li:nth-child(odd){
     text-transform: uppercase;
 }
~~~

#### 2 - Faça todas as tags Header (h1, h2...) possuírem cor de fonte vermelha e, se alguma delas estiver em itálico, aumente seu tamanho para 40px e acrescente uma borda de 1px preta e sólida.

~~~css
.tagH{
      color: red;
  }

.tagH em {
    font-size: 40px;
    border: 1px black solid;
}
~~~

#### 3 - Faça todas as li's terem 20px de tamanho de fonte e, para todo texto em itálico dentro de alguma li, utilize a propriedade font-weight para deixá-lo negrito.
~~~css
li {
    font-size: 20px;
}
li em {
    font-weight: 600;
}
~~~
#### 4 - Na listagem de linguagens de programação, faça com que as 3 primeiras da lista possuam cor de fonte azul e, se alguma possuir "java*" no texto, utilize uma cor de fundo rosa.
~~~css
.proLang li:nth-child(-1n+3){
    color: blue;
}
.pink-bg{
    background-color: pink;
}
~~~


#### 5 - (Bônus) Para cada link na lista de aliados da pessoa desenvolvedora, faça com que ao passar o mouse sobre cada um, o texto fique em negrito e assuma a cor de fonte "temática do site"
~~~css
.aliados-dev > li:hover{
    font-weight: 700;
} 
.stck:hover{
    color: orange;
}
.w3s:hover{
    color: greenyellow;
}
.mozz:hover{
    color:black
}
.dev:hover{
    color: yellow;
}
.trybe:hover{
    color:green
}
~~~
Dica 1: Utilize o seletor :hover para controlar o passar do mouse.
Dica 2: Sugestão de cores padrão. StackOverflow (laranja), W3Schools (verde), MDN (preta), DevDocs (amarela), Trybe (verde).



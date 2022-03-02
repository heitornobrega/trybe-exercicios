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

### Exercícios I

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


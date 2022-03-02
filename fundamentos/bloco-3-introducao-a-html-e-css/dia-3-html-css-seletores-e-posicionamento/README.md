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



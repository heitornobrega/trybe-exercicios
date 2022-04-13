
const semana = {
    diasDaSemana: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    fimDeSemana: ['Sabado', 'Domingo'],
};
  
const { diasDaSemana, fimDeSemana } = semana; //Desestruturou o obj em duas variaveis

const semanaCompleta = [...diasDaSemana, ...fimDeSemana]; //espalhou o conteudo de dois arrays em um array

const estudante = {
    a: 'Roberta',
    b: 'Tribo A',
    c: 'Probabilidade e estatística',
};
  
const { a: nome, b: subTurma, c: materia, d: turno} = estudante; //Desconstruiu o obj em vaiaveis e mudou o nome das keys


const produto = {
    nome: 'PC Gamer',
    preco: '9200',
    vendedor: 'Mr Robot',
};
  
const printProductDetails = ({ nome, preco, vendedor }) => {
    console.log(`Promoção! ${nome} por apenas ${preco} é s'aqui: ${vendedor}`);
};// Recebe um objeto com três keys, e printa essas keys

printProductDetails(produto) //passa um objeto para a função acima. Que por sua vez desconstroi o objeto em treês vaiáveis e depois mostra na tela uma frase
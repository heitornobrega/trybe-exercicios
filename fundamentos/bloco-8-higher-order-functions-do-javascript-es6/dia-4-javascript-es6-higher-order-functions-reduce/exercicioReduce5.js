const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
     return names.reduce((acc, curr) => 
          acc + curr.split('').reduce((acumulador, corrente) => {
              if (corrente === 'a' || corrente === 'A') {
                  return acumulador + 1;
              }
              return acumulador;
          },0)
    ,0)
  }


console.log(containsA())
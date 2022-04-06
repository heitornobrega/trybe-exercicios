function encode(texto) {
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    for (var c in texto) {
      for (i in vogais) {
          if (texto[c] === vogais[i]) {
            i++
            texto = texto.replace(texto[c], i.toString());
          };
      }
  }
  return texto;
  }
  
  function decode(texto) {
    var vogais = ["a", "e", "i", "o", "u"];
    var numeros = ["1", "2", "3", "4", "5"];
    for (c in texto) {
      for (i in numeros) {
        if(texto[c] === numeros[i]){
          texto = texto.replace(texto[c], vogais[i]);
        }
      }
    }
    return texto;
  }

  const functions = { encode, decode };
  module.exports = functions;
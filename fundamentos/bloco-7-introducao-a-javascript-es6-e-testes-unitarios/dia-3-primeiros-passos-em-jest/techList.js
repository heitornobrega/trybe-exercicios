
function techList(lista, nome) {
    if (lista.length === 0) return 'Vazio!'
    
    const listaOrdenada = lista.sort()
    const listaSaida = []

    for (let c = 0; c < listaOrdenada.length; c += 1){
        listaSaida.push(
            {
                tech: listaOrdenada[c],
                name: nome
            }
        )
    }
    return listaSaida;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))
module.exports = techList;
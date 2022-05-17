import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    state={
    indexDoPokemon: 0
}
    proxPokemon = () => {

        this.setState((prevState, _props) => {
            console.log(Object.values(prevState)[0])
            console.log(pokemons.length)
            if (Object.values(prevState)[0] === pokemons.length - 1) {
                console.log(prevState)
                console.log(pokemons.length)
                return{ indexDoPokemon: 0}
            }
            else{
                return{ indexDoPokemon: prevState.indexDoPokemon + 1}
            }
        })
    }
    
    render() {
        return (
            <>
            <div className="pokedex">
                {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)[this.state.indexDoPokemon]}
                </div>
                <button onClick={this.proxPokemon}>Prox Pokemon</button>
                </>
        );
    }
}

export default Pokedex;
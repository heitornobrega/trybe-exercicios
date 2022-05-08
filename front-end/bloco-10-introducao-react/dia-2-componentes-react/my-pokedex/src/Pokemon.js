import React from "react";
import pokemons from "./data";
import ImgDoPokemon from "./ImgDoPokemon";
import NomeDoPokemon from "./NomeDoPokemon";
import PesoDoPokemon from "./PesoDoPokemon";
import TipoDoPokemon from "./TipoDoPokemon";



class Pokemon extends React.Component{
    render() {
        return (
            <div>
                <ImgDoPokemon />
                <NomeDoPokemon />
                <PesoDoPokemon />
                <TipoDoPokemon />
            </div>
        )
    }
}

export default Pokemon;
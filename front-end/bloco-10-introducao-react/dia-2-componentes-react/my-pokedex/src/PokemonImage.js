import React from 'react';
import "./PokemonImage.css"
class PokemonImage extends React.Component{
    render() {
        const image = this.props.image
        const name = this.props.name
        return <img src={image} alt={`Imagem de um ${name}`} className="pokemonImage"/>;
    }
}

export default PokemonImage;
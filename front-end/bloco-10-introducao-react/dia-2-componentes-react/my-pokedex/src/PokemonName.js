import React from "react";

class PokemonName extends React.Component{
    render() {
        const name = this.props.name;
        return (
            <h3>
                {name}
            </h3>
        )
    }
}

export default PokemonName;
// import './App.css';
// import Pokedex from './Pokedex';
import PokemonName from "./PokemonName";
import PokemonImage from "./PokemonImage";
import PokemonType from "./PokemonType";
import PokemonWeigth from "./PokemonWeigth";

function App() {
  const pikachu = {
    id: 25,
    name: "Pikachu",
    type: 'Electric',
    averageWeight: {
      value: 6.0,
      measurementUnit: "kg"
    },
    image: "https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
  }
  const charmander = {
    id: 4,
    name: "Charmander",
    type: 'Fire',
    averageWeight: {
      value: 8.5,
      measurementUnit: "kg"
    },
    image: "https://archives.bulbagarden.net/media/upload/7/73/004Charmander.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
  }
  return (
    <div className="App">
      <PokemonImage image={charmander.image} name={charmander.name}/>
      <PokemonName name={charmander.name} />
      <PokemonType type={charmander.type} />
      <PokemonWeigth/>
    </div>
  );
}

export default App;

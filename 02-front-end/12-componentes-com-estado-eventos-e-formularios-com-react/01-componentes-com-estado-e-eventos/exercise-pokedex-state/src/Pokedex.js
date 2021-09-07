import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './pokedex.css';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredType: '',
      pokemonIndex: 0,
    };
    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);
  }

  filterPokemons(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  nextPokemon(numberOfPokemons) {
    this.setState((prevState, _props) => ({
      pokemonIndex: (prevState.pokemonIndex + 1) % numberOfPokemons,
      // resets counter to 0 if it reaches the last Pokémon
    }));
  }

  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const { filteredType } = this.state;

    return pokemons.filter((pokemon) => pokemon.type.includes(filteredType));
  }

  fetchPokemonTypes() {
    const { pokemons } = this.props;

    return pokemons.reduce(
      (types, currPokemon) =>
        types.includes(currPokemon.type) ? types : [...types, currPokemon.type],
      []
    );
    // returns array of types
  }

  render() {
    const { pokemonIndex } = this.state;
    const pokemonsTypes = this.fetchPokemonTypes();
    const filteredPokemons = this.fetchFilteredPokemons();

    return (
      <div className="pokedex">
        <Pokemon pokemon={filteredPokemons[pokemonIndex]} />
        <div className="pokedex-buttons-panel">
          <Button
            className="filter-button"
            onClick={() => this.filterPokemons('')}
          >
            All
          </Button>
          {pokemonsTypes.map((type) => (
            <Button
              className="filter-button"
              onClick={() => this.filterPokemons(type)}
              key={type}
            >
              {type}
            </Button>
          ))}
        </div>
        <Button
          className="pokedex-button"
          onClick={() => this.nextPokemon(filteredPokemons.length)}
          disabled={filteredPokemons.length === 1}
        >
          Próximo Pokémon
        </Button>
      </div>
    );
  }
}

export default Pokedex;

import React, { Component } from 'react';
import Pokedex from './components/Pokedex';
import pokemons from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <h1 className="title">Pokédex</h1>
        <Pokedex pokemons={pokemons} />
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Pokemon from './components/Pokemon';
import pokemons from './data';
import './App.css';

class App extends Component {
  render() {
    return <Pokemon pokemon={pokemons[0]} />;
  }
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderText from './components/HeaderText';
import { PokemonDataContext } from './PokemonDataContext';
import PokemonListView from './components/PokemonListView';


function App() {
  const [pokemons, setData] = useState([]);
  useEffect(() => {
    fetch('https://uyghur.ai/course/data/pokemon.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <PokemonDataContext.Provider value={pokemons}>
      <div className="pokedex-app">
        <HeaderText />
        <PokemonListView />
      </div>
    </PokemonDataContext.Provider>
  );
}

export default App;

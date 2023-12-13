import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderText from './components/HeaderText';
import { PokemonDataContext } from './PokemonDataContext';
import PokemonListView from './components/PokemonListView';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import DisplayByType from './components/DisplayByType';
import TryMui from './components/TryMui';
import MuiNew from './components/MuiNew';

function App() {
  const [pokemons, setData] = useState([]);
  useEffect(() => {
    fetch('https://uyghur.ai/course/data/pokemon.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);


  return (
    <Router>
      <PokemonDataContext.Provider value={pokemons}>
        <div className="pokedex-app">
          <nav className="headernav navbar navbar-expand-lg sticky-top bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar1" aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar1">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link className="nav-item" to="/">Home</Link>
                  <Link className="nav-item" to="/grasstype">Grass Type</Link>
                  <Link className="nav-item" to="/firetype">Fire Type</Link>
                  <Link className="nav-item" to="/watertype">Water Type</Link>
                  <Link className="nav-item" to="/about">About</Link>
                  <Link className="nav-item" to="/trymui">Try MUI</Link>
                  <Link className="nav-item" to="/muinew">New MUI</Link>

                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<><HeaderText /><PokemonListView /></>} />
            <Route path="/grasstype" element={<DisplayByType displayType="grass" />} />
            <Route path="/firetype" element={<DisplayByType displayType="fire" />} />
            <Route path="/watertype" element={<DisplayByType displayType="water" />} />
            <Route path="/about" element={<About />} />
            <Route path="/trymui" element={<TryMui />} />
            <Route path="/muinew" element={<MuiNew />} />
          </Routes>
        </div>
      </PokemonDataContext.Provider>
    </Router>
  );
}

export default App;

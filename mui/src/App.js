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
import DataView from './components/DataView';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import {
  Home,
  Grass,
  LocalFireDepartment,
  WaterDrop,
  Info, TableChart
} from "@mui/icons-material";
import PokemonTable from './components/PokemonTable';

const drawerWidth = 240;

function App() {
  const [pokemons, setData] = useState([]);
  useEffect(() => {
    fetch('https://uyghur.ai/course/data/pokemon.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItemButton component={Link} to="/">
          <ListItemIcon sx={{ color: "#e74d49" }}>
            {<Home />}
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component={Link} to="/grasstype">
          <ListItemIcon sx={{ color: "#48d0b0" }}>
            {<Grass />}
          </ListItemIcon>
          <ListItemText primary="Grass Type" />
        </ListItemButton>
        <ListItemButton component={Link} to="/firetype">
          <ListItemIcon sx={{ color: "#FB6C6C" }}>
            {<LocalFireDepartment />}
          </ListItemIcon>
          <ListItemText primary="Fire Type" />
        </ListItemButton>
        <ListItemButton component={Link} to="/watertype">
          <ListItemIcon sx={{ color: "#609FB5" }}>
            {<WaterDrop />}
          </ListItemIcon>
          <ListItemText primary="Water Type" />
        </ListItemButton>
        <ListItemButton component={Link} to="/pokemontable">
          <ListItemIcon sx={{ color: "#F8C471" }}>
            {<TableChart />}
          </ListItemIcon>
          <ListItemText primary="Pokemon Table" />
        </ListItemButton>
        <ListItemButton component={Link} to="/about">
          <ListItemIcon sx={{ color: "#212121" }}>
            {<Info />}
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton component={Link} to="/trymui">
          <ListItemText primary="Try MUI" />
        </ListItemButton>
        <ListItemButton component={Link} to="/muinew">
          <ListItemText primary="New MUI" />
        </ListItemButton>
        <ListItemButton component={Link} to="/dataview">
          <ListItemText primary="Show Data" />
        </ListItemButton>

      </List>
    </div>
  );


  return (
    <Router>
      <PokemonDataContext.Provider value={pokemons}>
        <div className="pokedex-app" style={{ display: 'flex' }}>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
          >
            {drawer}
          </Drawer>
          <div style={{ width: `calc(100% - ${drawerWidth}px)` }}>
            <Routes>
              <Route path="/" element={<><HeaderText /><PokemonListView /></>} />
              <Route path="/grasstype" element={<DisplayByType displayType="grass" />} />
              <Route path="/firetype" element={<DisplayByType displayType="fire" />} />
              <Route path="/watertype" element={<DisplayByType displayType="water" />} />
              <Route path="/about" element={<About />} />
              <Route path="/trymui" element={<TryMui />} />
              <Route path="/muinew" element={<MuiNew />} />
              <Route path="/dataview" element={<DataView />} />
              <Route path="/pokemontable" element={<PokemonTable />} />
            </Routes>
          </div>
        </div>
      </PokemonDataContext.Provider>
    </Router>
  );
}

export default App;

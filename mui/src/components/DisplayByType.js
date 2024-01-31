import React, { useContext, useState } from 'react'
import { PokemonDataContext } from '../PokemonDataContext'
import { useFavorites } from '../FavoritesContext'
import PokemonDetailsView from './PokemonDetailsView'
import './PokemonListView.css'
import PokemonCardMUI from './PokemonCardMUI'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function DisplayByType({ displayType }) {
    const allPokemons = useContext(PokemonDataContext);
    const filteredTypePokemons = allPokemons.filter((pokemon) => {
        return pokemon.type[0].toLowerCase() === displayType;
    });

    const [isHidden, setIsHidden] = useState(true);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const { manageFavorite, isFavorite } = useFavorites();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleClick = ({ pokemon }) => {
        setSelectedPokemon(pokemon);
        setIsHidden(false);
    }
    const handleClose = () => {
        setIsHidden(true);
    }

    const handleFavoriteClick = (pokemon) => {
        manageFavorite(pokemon);
        const favoriteStatus = isFavorite(pokemon) ? "Removed from favorites!" : "Added to favorites!";
        setSnackbarMessage(favoriteStatus);
        setSnackbarOpen(true);
    };

    return (
        <div className="pokedex-view">
            {
                filteredTypePokemons.map((pokemon) => (
                    <PokemonCardMUI
                        key={pokemon.id}
                        pokemon={pokemon}
                        onClick={() => handleClick({ pokemon })}
                        onFavoriteClick={() => handleFavoriteClick(pokemon)}
                        isFavorite={isFavorite(pokemon)}
                    />
                ))
            }
            {selectedPokemon && <PokemonDetailsView selectedPokemon={selectedPokemon} isHidden={isHidden} handleClose={handleClose} />}
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
            >
                <Alert onClose={() => setSnackbarOpen(false)} severity="info" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    )
}

import React, { useState } from 'react'
import { useFavorites } from '../FavoritesContext' // Update this path
import PokemonCardMUI from './PokemonCardMUI';
import './PokemonListView.css'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export default function MyFavoritePokemons() {
    const { favorites } = useFavorites(); // Access the favorites from context
    const [isHidden, setIsHidden] = useState(true);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const { manageFavorite, isFavorite } = useFavorites();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleClick = ({ pokemon }) => {
        setSelectedPokemon(pokemon);
        setIsHidden(false);
    }


    const handleFavoriteClick = (pokemon) => {
        manageFavorite(pokemon);
        const favoriteStatus = isFavorite(pokemon) ? "Removed from favorites!" : "Added to favorites!";
        setSnackbarMessage(favoriteStatus);
        setSnackbarOpen(true);
    };

    if (favorites.length === 0) {
        return <div>No favorite Pokémon added yet.</div>;
    }
    return (
        <div className="pokedex-view favorite-pokemons-container">
            {favorites.map(pokemon => (
                <PokemonCardMUI
                    key={pokemon.id}
                    pokemon={pokemon}
                    onClick={() => handleClick({ pokemon })}
                    onFavoriteClick={() => handleFavoriteClick(pokemon)}
                // handle onClick and onFavoriteClick differently here
                />
            ))}
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
            >
                <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    )
}

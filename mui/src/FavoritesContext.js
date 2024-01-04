import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]); // storing favorite pokemons in the array

    const manageFavorite = (pokemon) => {
        setFavorites(prev => {
            if (prev.some(p => p.id === pokemon.id)) {
                // Remove from favorites
                return prev.filter(p => p.id !== pokemon.id);
            } else {
                // Add to favorites
                return [...prev, pokemon];
            }
        });
    };
    const isFavorite = (pokemon) => {
        // check if the pokemon provided in the parameter is in the favorites
        return favorites.some(p => p.id === pokemon.id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, manageFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

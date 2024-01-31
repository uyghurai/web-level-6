import React, { createContext, useState, useContext, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    }); // storing favorite pokemons in the array


    // Save favorites to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const manageFavorite = (pokemon) => {
        setFavorites(favorites => {
            if (favorites.some(p => p.id === pokemon.id)) {
                // Remove from favorites
                return favorites.filter(p => p.id !== pokemon.id);
            } else {
                // Add to favorites
                return [...favorites, pokemon];
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

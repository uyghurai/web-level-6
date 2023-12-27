import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);

    const toggleFavorite = (pokemon) => {
        setFavorites(prev => {
            if (prev.includes(pokemon)) {
                return prev.filter(fav => fav !== pokemon);
            } else {
                return [...prev, pokemon];
            }
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, showFavorites, setShowFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

import React, { useContext, useState } from 'react'
import { PokemonDataContext } from '../PokemonDataContext'
import PokemonCard from './PokemonCard'
import PokemonDetailsView from './PokemonDetailsView'
import './PokemonListView.css'

export default function DisplayByType({ displayType }) {
    const allPokemons = useContext(PokemonDataContext);
    const filteredTypePokemons = allPokemons.filter((pokemon) => {
        return pokemon.type[0].toLowerCase() === displayType;
    });

    const [isHidden, setIsHidden] = useState(true);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const handleClick = ({ pokemon }) => {
        setSelectedPokemon(pokemon);
        setIsHidden(false);
    }
    const handleClose = () => {
        setIsHidden(true);
    }

    return (
        <div className="pokedex-view">
            {
                filteredTypePokemons.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        onClick={() => handleClick({ pokemon })}
                    />
                ))
            }
            {selectedPokemon && <PokemonDetailsView selectedPokemon={selectedPokemon} isHidden={isHidden} handleClose={handleClose} />}
        </div>
    )
}

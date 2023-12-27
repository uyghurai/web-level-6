import React, { useContext, useState } from 'react'
import { PokemonDataContext } from '../PokemonDataContext'
import PokemonDetailsView from './PokemonDetailsView'
import './PokemonListView.css'
import PokemonCardMUI from './PokemonCardMUI'

const PokemonListView = () => {
    const pokemonList = useContext(PokemonDataContext);
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
                pokemonList.map((pokemon) => (

                    <PokemonCardMUI
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

export default PokemonListView
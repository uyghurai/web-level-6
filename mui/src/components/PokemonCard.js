import React from 'react'
import './PokemonCard.css'

const PokemonCard = ({ pokemon, onClick }) => {
    const className = pokemon.type.map(
        (type, index) => 'type-' + type.toLowerCase())
        .join(' '),
        paddedId = '#' + pokemon.id.toString().padStart(3, '000'),
        imgURL = pokemon.img;
    return (
        <div className="card-container" onClick={onClick}>
            <div className={`card ${className}`}>
                <div className="bg-pokeball"></div>
                <span className="pokemon-id">{paddedId}</span>
                <div className="card-title">
                    <h2>
                        {pokemon.name.replace(/-/g, ' ')}
                    </h2>
                    <div className="pokemon-types">
                        {
                            pokemon.type.map((type, index) => (
                                <span key={index} className="type">
                                    {type}
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div className="pokemon-image">
                    <img alt={pokemon.name} src={imgURL} />
                </div>

            </div>
        </div>
    )
}

export default PokemonCard
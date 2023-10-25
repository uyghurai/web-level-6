import ReactDOM from 'react-dom';
import React from 'react'
import { useCallback } from 'react';
import OverlayView from './OverlayView';
import './PokemonCard.css'
import './Details.css'
import PokemonCard from './PokemonCard';
import PopupDetails from './PopupDetails';
import './PokemonDetailsView.css'

const PokemonDetailsView = ({ selectedPokemon, isHidden, handleClose }) => {

    const handleAnimationEnd = useCallback(({ animationName }) => {
        if (animationName !== 'pull-down-center') {
            return;
        }

        handleClose();
    }, [handleClose]);
    if (isHidden || !selectedPokemon) {
        return null;
    }

    return ReactDOM.createPortal(
        <>

            <OverlayView onClick={handleClose} />
            <div className={`details-view-container`} onAnimationEnd={handleAnimationEnd} >
                <PokemonCard pokemon={selectedPokemon} />
                <PopupDetails selectedPokemon={selectedPokemon} />
            </div>
        </>, document.body,
    );
}

export default PokemonDetailsView
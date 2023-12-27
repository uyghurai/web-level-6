import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import './PokemonCard.css'

export default function PokemonCardMUI({ pokemon, onClick }) {
    const className = pokemon.type.map(
        (type, index) => 'type-' + type.toLowerCase())
        .join(' '),
        paddedId = '#' + pokemon.id.toString().padStart(3, '000'),
        imgURL = pokemon.img;
    return (
        <div className="card-container" onClick={onClick}>
            <Card sx={{ maxWidth: 345 }} className={`card ${className}`}>
                <CardMedia
                    component="img"
                    image={imgURL}
                    alt={pokemon.name.replace(/-/g, ' ')}
                />
                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        {pokemon.name.replace(/-/g, ' ')}
                    </Typography>
                    <span>{paddedId}</span>
                    <div className="pokemon-types">
                        {
                            pokemon.type.map((type, index) => (
                                <><span key={index} className="type">
                                    {type}
                                </span><span> </span></>
                            ))
                        }
                    </div>
                </CardContent>
                <CardActionArea>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActionArea>
            </Card>
        </div>
    )
}

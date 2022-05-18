import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function PokemonCard(props) {

    const pokemon = props.pokemon;

    return (
        <Card sx={{background:"linear-gradient(to right, #ffe259, #ffa751)", border: "black solid 3px", boxShadow:"-5px 5px 20px -10px rgba(0,0,0,1)", ':hover':{ cursor: "pointer", transform: "scale(1.05)"}, transition: "0.3s", padding:"10px", width:"150px", position: "relative"}}>
            <Typography sx={{}} color="black" textAlign="left" variant="h6">
                {pokemon.name}
            </Typography>
        </Card>
    );
}
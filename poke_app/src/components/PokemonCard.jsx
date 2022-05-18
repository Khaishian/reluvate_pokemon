import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function PokemonCard(props) {

    const {id, pokemon, level} = props.pokemon;
    const removePokemon = props.removePokemon;

    return (
        <Card sx={{background: "linear-gradient(to right, #ffe259, #ffa751)", border: "black solid 3px", boxShadow:"-5px 5px 20px -10px rgba(0,0,0,1)", ':hover':{ cursor: "pointer", transform: "scale(1.05)"}, transition: "0.3s", padding:"10px", width:"150px", position: "relative"}}>
            <RemoveCircleIcon onClick={() => removePokemon(props.pokemon)} sx={{transition: "0.3s", ":hover":{transform: "scale(1.2)", cursor: "pointer"}, color:"deepPink", position: "absolute", top: 5, right: 5}}/>
            <Typography sx={{}} color="black" textAlign="left" variant="h6">
                {pokemon.name}
            </Typography>
            <Typography sx={{}} color="black" textAlign="left" variant="p">

                HP: {pokemon.hp}
                <br/>
                ATK: {pokemon.attack}
                <br/>
                DEF: {pokemon.defense}
                <br/>
                TYPE: {pokemon.type}
                <br/>
                LVL: {level}

            </Typography>
        </Card>
    );
}
import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function PokemonCard(props) {

    const {id, pokemon, level} = props.pokemon;
    const removePokemon = props.removePokemon;

    return (
        <Card sx={{padding:"10px", width:"150px", position: "relative"}}>
            <RemoveCircleIcon onClick={() => removePokemon(id)} sx={{transition: "0.3s", ":hover":{transform: "scale(1.2)", cursor: "pointer"}, color:"red", position: "absolute", top: 5, right: 5}}/>
            <Typography sx={{}} color="black" textAlign="left" variant="h6">
                {pokemon.name}
            </Typography>
            <Typography sx={{}} color="black" textAlign="left" variant="p">
            {/* <table>
                <tr>
                    <td>HP: </td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>ATK: </td>
                    <td>907</td>
                </tr>
            </table> */}

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
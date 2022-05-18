import * as React from 'react';
import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PokemonCard from './PokemonCard';
import {AppContext} from '../App';
import { getMyPokemons, deletePokemon, getAllPokemons } from '../services/PokemonService';

export default function Owned(props) {

    const myPokemons = props.myPokemons;
    const removePokemon = props.removePokemon;

    return (
        <Container maxWidth="xl" sx={{}}>
            <Typography sx={{}} color="white" textAlign="left" variant="h5">
                My Pokemons 
            </Typography>
            <Card sx={{background:"", padding:"20px", width:{xs:"auto",md:"auto"}}}>
                <Grid container spacing={4}>
                    {myPokemons && myPokemons.map(pokemon=>{
                        return(
                            <Grid item xs={4} md={3} lg={2} key={pokemon.id}>
                                <PokemonCard pokemon={pokemon} removePokemon={(pokemon) => removePokemon(pokemon)}></PokemonCard>
                            </Grid>
                        )
                    })}

                </Grid>
                {myPokemons.length == 0 &&
                    <Box sx={{pt:"30px", my:"10px", justifyContent:"center", display:"flex"}}>
                        <Typography sx={{}} color="black" textAlign="left" variant="h5">
                            No Pokemons yet, Try catching one!
                        </Typography>
                    </Box> 
                }
            </Card>
        </Container>
    );
}
import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getUnownedPokemons } from '../services/PokemonService';
import {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import PokemonNameCard from './PokemonNameCard';
import {AppContext} from '../App';

export default function Unowned(props) {

    const unownedPokemons = props.unownedPokemons;

    return (
        <Container maxWidth="xl" sx={{}}>
            <Typography sx={{}} color="white" textAlign="left" variant="h5">
                Unowned Pokemons 
            </Typography>
            <Card sx={{background:"", padding:"50px", width:{xs:"auto",md:"auto"}}}>
                <Grid container spacing={2}>
                    {unownedPokemons && unownedPokemons.map(pokemon=>{
                        return(
                            <Grid item xs={4} md={3} lg={2} key={pokemon.id}>
                                <PokemonNameCard pokemon={pokemon}></PokemonNameCard>
                            </Grid>
                        )
                    })}
                </Grid>
                {unownedPokemons.length == 0 &&
                    <Box sx={{pt:"30px", justifyContent:"center", display:"flex"}}>
                        <Typography sx={{}} color="black" textAlign="left" variant="h5">
                            All Pokemons owned! 
                        </Typography>
                    </Box> 
                }
            </Card>
        </Container>
    );
}
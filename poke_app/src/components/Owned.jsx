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

export default function Owned() {

    const {isLoggedIn, setIsLoggedIn} = React.useContext(AppContext);
    const [myPokemons, setMyPokemons] = useState([]);
    const jwt = localStorage.getItem('JWT')


    const fetchMyPokemons = async() => {
        const response = await getMyPokemons(jwt);
        setMyPokemons(response);

    }

    const removePokemon = async(id) => {
        const response = await deletePokemon(jwt, id);
        fetchMyPokemons();
    }

    useEffect(() => {
        fetchMyPokemons();
        return () => {
        };
    }, []);

    return (
        <Container maxWidth="xl" sx={{}}>
            <Typography sx={{}} color="white" textAlign="left" variant="h5">
                My Pokemons 
            </Typography>
            <Card sx={{padding:"20px", width:{xs:"auto",md:"auto"}}}>
                <Grid container spacing={0}>
                    {myPokemons && myPokemons.map(pokemon=>{
                        return(
                            <Grid item xs={4} md={3} lg={2} key={pokemon.id}>
                                <PokemonCard pokemon={pokemon} removePokemon={(id) => removePokemon(id)}></PokemonCard>
                            </Grid>
                        )
                    })}
                    
                </Grid>
                
            </Card>
        </Container>
    );
}
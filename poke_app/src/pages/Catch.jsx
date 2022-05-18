import * as React from 'react';
import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import catchbg from '../assets/catch.jpg';
import Guess from '../components/Guess';
import PokemonCatchCard from '../components/PokemonCatchCard';
import { getAllPokemons } from '../services/PokemonService';

export default function Catch() {

    const [allPokemons, setAllPokemons] = useState([]);
    const [pokemon, setPokemon] = useState(null);

    const fetchAllPokemons = async() => {
        const response = await getAllPokemons();
        setPokemon(genOnePokemon(response));

    }

    const refreshPokemon = () => {
        let randomId = Math.floor(Math.random() * allPokemons.length);
        setPokemon(allPokemons[randomId])
    }

    const genOnePokemon = (pokemons) => {
        setAllPokemons(pokemons);
        let randomId = Math.floor(Math.random() * pokemons.length);
        return pokemons[randomId]
    } 

    useEffect(() => {
        fetchAllPokemons();
        return () => {
        };
    }, []);

    return (
        <Box>
            <Box 
            sx={{
            position: "fixed",
            zIndex: -1,
            top: 0,
            left: 0,
            width: '100%',
            height: "100vh",
            backgroundImage: `url(${catchbg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: "brightness(0.6)",
            backgroundRepeat: 'no-repeat'}}>
            </Box>  
            <Container maxWidth="xl" sx={{mt: {xs:"100px", sm:"68px"}, pt:"20px"}}>
                <Box sx={{mb: "20px", justifyContent:"center", display:"flex"}}>
                    <Box>
                        <Typography sx={{mb: "10px"}} color="white" textAlign="left" variant="h5">
                            Wild {pokemon && pokemon.name.toUpperCase()} appeared!
                        </Typography>
                        <Box sx={{justifyContent:"center", display:"flex"}}>
                            {pokemon && <PokemonCatchCard pokemon={pokemon}></PokemonCatchCard>}
                        </Box>
                    </Box>
                </Box>
                <Guess pokemon={pokemon} refreshPokemon={refreshPokemon}></Guess>
            </Container>
        </Box>
    );
}
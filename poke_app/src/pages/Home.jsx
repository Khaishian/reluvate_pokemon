import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Owned from '../components/Owned'
import Unowned from '../components/Unowned'
import Typography from '@mui/material/Typography';
import { getCurrentUser } from '../services/UserService';
import { getUnownedPokemons, getMyPokemons, deletePokemon } from '../services/PokemonService';
import {AppContext} from '../App';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import videobg from '../assets/videobg.mp4'
import AlertDialog from '../components/AlertDialog';

export default function Home() {

    const {isLoggedIn, setIsLoggedIn} = React.useContext(AppContext);
    const [currentUser, setCurrentUser] = useState(null);
    const jwt = localStorage.getItem('JWT');
    const [unownedPokemons, setUnownedPokemons] = useState([]);
    const [myPokemons, setMyPokemons] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [pokemon, setPokemon] = React.useState(null);

    const fetchMyPokemons = async() => {
        const response = await getMyPokemons(jwt);
        setMyPokemons(response);

    }

    const removePokemon = (pokemon) => {
        console.log(pokemon)
        setPokemon(pokemon);
        setOpen(true);
        // confirmRemovePokemon(id)
    }

    const confirmRemovePokemon = async(id) => {
        const response = await deletePokemon(jwt, id);
        fetchMyPokemons();
        fetchUnownedPokemons();
    }

    useEffect(() => {
        // if(localStorage.getItem('JWT') != null){
        //     setIsLoggedIn(true);
        // }else{
        //     setIsLoggedIn(false);
        // }
        if(isLoggedIn){
            fetchCurrentUser();
            fetchUnownedPokemons();
            fetchMyPokemons();
        }

        return () => {
        };
    }, []);

    const startGame = () => {
        window.location.href = "/login";
    }

    const fetchCurrentUser = async() => {
        const response = await getCurrentUser(jwt);
        setCurrentUser(response.username)
    }

    const fetchUnownedPokemons = async() => {
        const response = await getUnownedPokemons(jwt);
        setUnownedPokemons(response);

    }

    return (
        <Container maxWidth="xl" sx={{pt:"20px"}}>
            <div>
                <video style={{ filter: "brightness(0.5)", position: "fixed", zIndex: -1, top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover"}} autoPlay loop muted>
                    <source src={videobg} type='video/mp4' />
                </video>
                {!isLoggedIn && <Box sx={{justifyContent:"center", display:"flex", alignItems:"center", height:"90vh"}}>
                    <Box sx={{padding:"30px", width:{xs:"auto", md:"800px"}}}> 
                        <Typography sx={{my:"50px", mx: "100px"}} color="white" textAlign="center" variant="h2">
                            Welcome to The Pokemon Game!
                        </Typography>
                        <Typography sx={{my:"50px", mx: "100px"}} color="white" textAlign="justify" variant="h5">
                        This is an assignment (standardised test) before interview for internship role in Reluvate Technologies. Feel free to play around the app, happy pokemon catching! 
                        </Typography>
                        <Box sx={{justifyContent:"center", display:"flex"}}> 
                            <Button size="large" sx={{borderRadius:"5px",':hover': {bgcolor: 'primary', color: 'text.primary'}}} color="primary" variant="contained" onClick={startGame}>
                                Start Game
                                <PlayArrowIcon style={{height:"20px", marginRight:"-10px", marginTop:"-2px"}}/>
                            </Button>
                        </Box>
                    </Box>
                </Box>}
                {isLoggedIn && 
                    <Box>
                        <Typography sx={{my:"50px"}} color="white" textAlign="right" variant="h6">
                        Welcome back, Trainer {currentUser}! 
                        </Typography>
                        <Owned myPokemons={myPokemons} removePokemon={(pokemon) => removePokemon(pokemon)}></Owned>
                        <div style={{height:"50px"}}></div>
                        <Unowned unownedPokemons={unownedPokemons}></Unowned>
                        <div style={{height:"50px"}}></div>
                    </Box>
                }
            </div>
            <AlertDialog confirmRemovePokemon={confirmRemovePokemon} pokemon={pokemon} open={open} setOpen={setOpen}></AlertDialog>
        </Container>
    );
}
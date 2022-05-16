import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Owned from '../components/Owned'
import Unowned from '../components/Unowned'
import All from '../components/All'
import Typography from '@mui/material/Typography';
import { getAllPokemons } from '../services/PokemonService';
import { getCurrentUser } from '../services/UserService';
import {AppContext} from '../App';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import videobg from '../assets/videobg.mp4'

export default function Home() {

    const {isLoggedIn, setIsLoggedIn} = React.useContext(AppContext);
    const [allPokemons, setAllPokemons] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    var jwt = null;

    useEffect(() => {
        jwt = localStorage.getItem('JWT')
        fetchAllPokemons();
        if(isLoggedIn){
            fetchCurrentUser();
        }

        return () => {
        };
    }, []);

    const startGame = () => {
        window.location.href = "/login";
    }

    const fetchAllPokemons = async() => {
        const response = await getAllPokemons();
        setAllPokemons(response) 
    }

    const fetchCurrentUser = async() => {
        const response = await getCurrentUser(jwt);
        setCurrentUser(response.username)
    }

    return (
        <Container maxWidth="xl" sx={{pt:"20px"}}>
            {/* {allPokemons && allPokemons.map(pokemon=>{
                return(
                        <div key={pokemon.id}>
                            <h4>{pokemon.name}</h4>
                        </div>
                        )
            })} */}
            <div>
                <video style={{ filter: "brightness(0.5)", position: "fixed", zIndex: -1, top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover"}} autoPlay loop muted>
                    <source src={videobg} type='video/mp4' />
                </video>
                {!isLoggedIn && <Box sx={{justifyContent:"center", display:"flex"}}>
                    <Box sx={{padding:"30px", width:{xs:"auto", md:"800px"}}}> 
                        <Typography sx={{my:"50px", mx: "100px"}} color="white" textAlign="center" variant="h2">
                            Welcome to The Pokemon Game!
                        </Typography>
                        <Typography sx={{my:"50px", mx: "100px"}} color="white" textAlign="justify" variant="h5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </Typography>
                        <Box sx={{justifyContent:"center", display:"flex"}}> 
                            <Button size="large" sx={{borderRadius:"5px",':hover': {bgcolor: 'primary.dark', color: 'text.primary'}}} color="secondary" variant="contained" onClick={startGame}>
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
                        <Owned></Owned>
                        <div style={{height:"50px"}}></div>
                        <Unowned></Unowned>
                        <div style={{height:"50px"}}></div>
                        <All></All>
                        <div style={{height:"100px"}}></div>
                    </Box>
                }
            </div>
        </Container>
    );
}
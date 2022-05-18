import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PokemonCard from './PokemonCatchCard';
import {AppContext} from '../App';
import { getMyPokemons, deletePokemon, addPokemon, getAllPokemons } from '../services/PokemonService';

export default function Guess(props) {

    const [life, setLife] = useState(3)
    const [hint, setHint] = useState("")
    const [ans, setAns] = useState(null)

    const guessRef = useRef('')
    const refreshPokemon = props.refreshPokemon;
    const pokemon = props.pokemon;

    const jwt = localStorage.getItem('JWT');
        
    const genNum = () => {
        //random 1 - 10
        setAns(Math.floor(Math.random() * 10) + 1);
    }

    useEffect(() => {
        genNum();
        return () => {
        };
    }, []);

    const checkGuess = () => { 
        if(life == 0){
            return;
        }
        let guess = guessRef.current.value;
        console.log('ans: '+ ans)
        console.log('guess: ' + guess)
        if(guess > ans){
            setHint("Too high!")
            guessWrong();
        }else if(guess < ans){
            setHint('Too low!')
            guessWrong();
        }else{
            win();
        }
    }

    const win = () => {
        setHint('You win! Resetting in 3...')
        handleClick("Wild " + pokemon.name.toUpperCase() + " has been captured!", "success")
        setTimeout(() => {setHint('You win! Resetting in 2...')}, 1000);
        setTimeout(() => {setHint('You win! Resetting in 1...')}, 2000);
        setTimeout(() => {resetGame()}, 3000);
        const body = {
            pokemon_id: pokemon.id
        };
        addPokemon(jwt, body);
    }

    const lose = () => {
        
        setHint('Game over (number is ' + ans + ')! Resetting in 3...')
        handleClick("Wild " + pokemon.name.toUpperCase() + " has escaped!",  "error")
        setTimeout(() => {setHint('Game over (number is ' + ans + ')! Resetting in 2...')}, 1000);
        setTimeout(() => {setHint('Game over (number is ' + ans + ')! Resetting in 1...')}, 2000);
        setTimeout(() => {resetGame()}, 3000);
    }
    
    const resetGame = () => {
        refreshPokemon();
        setLife(3);
        genNum();
        setHint("");
    }

    const guessWrong = () =>{
        const temp = life - 1
        if(temp <= 0){
            //game over
            setLife(0);
            lose();
        }else{
            setLife(temp);
        }
    }

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open, setOpen] = React.useState(false);

    const [message, setMessage] = React.useState("");
    const [severity, setSeverity] = React.useState("error");

    const handleClick = (message, severity) => {
        setMessage(message)
        setSeverity(severity)
        setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    return (
        <Container maxWidth="xl" sx={{}}>
            <Typography sx={{}} color="white" textAlign="left" variant="h5">
                Guess The Number 
            </Typography>
            <Card sx={{background:"", padding:"20px", width:{xs:"auto",md:"auto"}}}>
                <Typography sx={{}} color="black" textAlign="left" variant="p1">
                    Guess a number between 1 - 10 within 3 attempts to capture the pokemon! 
                </Typography>
                <br/>
                <br/>
                <Typography sx={{}} color="black" textAlign="left" variant="p1" fontWeight={'bold'}>
                    <Box sx={{justifyContent:"start-end", display:"flex"}}>
                        <span>Lives remaining:</span>
                        <Box>
                            {[...Array(life)].map(life=>{
                                return(
                                    <FavoriteIcon style={{color:"red"}}/>
                                )
                            })}
                        </Box>
                    </Box>
                </Typography>
                <br/>
                <Box sx={{mb:"10px", justifyContent:"center", display:"flex"}}> 
                    <TextField
                            inputRef={guessRef}
                            id="filled-required"
                            label="Enter your number..."
                            defaultValue=""
                            type={'number'}
                            variant="outlined"
                            sx={{}}
                        /> 
                    &nbsp;
                    &nbsp;
                    <Button sx={{borderRadius:"5px",':hover': {bgcolor: 'primary', color: 'text.primary'}}} color="primary" variant="contained" onClick={checkGuess}>Guess</Button>
                </Box>
                {/* <Box sx={{mt:"10px"}}> 
                    {[...Array(life)].map(life=>{
                        return(
                            <FavoriteIcon style={{color:"red"}}/>
                        )
                    })}
                </Box>  */}
                <Box sx={{justifyContent:"center", display:"flex"}}> 
                    <Typography sx={{}} color="black" textAlign="left" variant="p1" fontWeight={"bold"}>
                        {hint}
                    </Typography>
                </Box> 
            </Card>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Container>
    );
}
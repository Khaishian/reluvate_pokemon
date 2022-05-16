import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { getAllPokemons } from '../assets/services/PokemonService';
import { getCurrentUser } from '../assets/services/UserService';
import {AppContext} from '../App';

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

    const fetchAllPokemons = async() => {
        const response = await getAllPokemons();
        setAllPokemons(response) 
    }

    const fetchCurrentUser = async() => {
        const response = await getCurrentUser(jwt);
        setCurrentUser(response.username)
    }

    return (
        <Container maxWidth="xl" sx={{mt: {xs:"100px", sm:"68px"}, pt:"20px"}}>
            {/* {allPokemons && allPokemons.map(pokemon=>{
                return(
                        <div key={pokemon.id}>
                            <h4>{pokemon.name}</h4>
                        </div>
                        )
            })} */}
            {!isLoggedIn && 
                <div>not Logged In</div>
            }
            {isLoggedIn && 
                <div>Welcome back, {currentUser}</div>
            }
        </Container>
    );
}
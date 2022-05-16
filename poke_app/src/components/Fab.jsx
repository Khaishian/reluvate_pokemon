
import React, {useState} from 'react';
import Fab from '@mui/material/Fab';
import {Link} from 'react-router-dom';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';  
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const FabCatch = () => {
  
    const [currentRoute, setCurrentRoute] = useState(window.location.pathname.substring(1));

  return (
    <React.Fragment>
    {currentRoute == 'home' && 
        <Link to={'/catch'} style={{textDecoration: 'none'}} onClick={() => {setCurrentRoute('catch')}}>
            <Fab sx={{position:"fixed", bottom:"18px", right: "18px", ':hover': {bgcolor: 'primary.dark', color: 'text.primary'}}} size="large" color="secondary" aria-label="add">
                <CatchingPokemonIcon sx={{ transition: "all 0.3s ease 0s", padding:"3px", backgroundClip:"content-box", ':hover': {color: 'text.primary'}}} fontSize="large"/>
            </Fab>
        </Link>
    }
    {currentRoute == 'catch' && 
        <Link to={'/home'} style={{textDecoration: 'none'}} onClick={() => {setCurrentRoute('home')}}>
            <Fab sx={{position:"fixed", bottom:"18px", right: "18px", ':hover': {bgcolor: 'primary.dark', color: 'text.primary'}}} size="large" color="secondary" aria-label="add">
                <ShoppingBagIcon sx={{ transition: "all 0.3s ease 0s", padding:"3px", backgroundClip:"content-box", ':hover': {color: 'text.primary'}}} fontSize="large"/>
            </Fab>
        </Link>
    }
    </React.Fragment>
  );
}
  
export default FabCatch;
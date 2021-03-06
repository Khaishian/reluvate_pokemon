import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import pokemon from '../assets/pokemon.png'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';  
import {AppContext} from '../App';

const Header = (props) => {

    const {isLoggedIn, setIsLoggedIn} = React.useContext(AppContext)

    const logout = () => {
        localStorage.setItem('JWT', "");
        setIsLoggedIn(false);
        window.location.href = "/home";
    }

    const catchPokemon = () => {
      window.location.href = "/catch";
    }

    return (
        <AppBar style={{background:"linear-gradient(to right, #f7971e, #ffd200)"}} position="fixed">
          <Container maxWidth="xl" sx={{paddingRight: {xs: '6px', md: '24px' }}}>
            <Toolbar disableGutters>
              <Box marginY={{xs:"10px", sm:"0"}} display={{xs:"block", sm:"flex"}}>
                <Box sx={{transition: '0.3s', ':hover': {marginBottom: '5px'}}}>
                    <Link to={'/home'}style={{textDecoration: 'none'}}>
                        <img style={{marginRight:"10px", height: 120, marginTop: "-40px", marginBottom:"-40px"}} src={pokemon} alt="logo" />
                    </Link>
                </Box>
              </Box>
              <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'flex', md: 'flex' } }}>
                {!isLoggedIn && 
                    <React.Fragment>
                        <Link to={'/login'} style={{textDecoration: 'none'}}>
                            <Button sx={{borderRadius:"5px",':hover': {bgcolor: 'primary', color: 'text.primary'}}} color="primary"  variant="contained">Sign Up</Button>
                        </Link>
                        &nbsp;
                        <Link to={'/login'} style={{textDecoration: 'none'}}>    
                            <Button sx={{borderRadius:"5px",':hover': {bgcolor: 'primary', color: 'text.primary'}}} color="primary"  variant="contained">Login</Button>
                        </Link>
                    </React.Fragment>
                }
                {isLoggedIn && 
                  <React.Fragment>
                    <Button sx={{borderRadius:"5px",':hover': {bgcolor: 'primary', color: 'text.primary'}}} color="primary"  variant="contained" onClick={catchPokemon}>
                      Catch Pokemon 
                      <CatchingPokemonIcon style={{height: "20px", marginLeft:"2px", marginRight:"-5px"}}/>
                    </Button>
                    &nbsp;
                    <Button sx={{borderRadius:"5px",':hover': {bgcolor: 'primary', color: 'text.primary'}}} color="primary"  variant="contained" onClick={logout}>Logout</Button>
                  </React.Fragment>
                }
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
};
export default Header;
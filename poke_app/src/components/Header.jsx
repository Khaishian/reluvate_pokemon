import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import {Link} from 'react-router-dom';
import pokemon from '../assets/pokemon.png'


const Header = (props) => {

    let isLoggedIn = false;

    const logout = () => {

    }

    return (
        <AppBar position="fixed">
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
                            <Button sx={{borderRadius:"5px",':hover': {bgcolor: 'primary.dark', color: 'text.primary'}}} color="secondary" variant="contained">Sign Up</Button>
                        </Link>
                        &nbsp;
                        <Link to={'/login'} style={{textDecoration: 'none'}}>    
                            <Button sx={{borderRadius:"5px",':hover': {bgcolor: 'primary.dark', color: 'text.primary'}}} color="secondary" variant="contained" onClick={logout}>Login</Button>
                        </Link>
                    </React.Fragment>
                }
                {isLoggedIn && <Button sx={{borderRadius:"5px",':hover': {bgcolor: 'primary.dark', color: 'text.primary'}}} color="secondary" variant="contained">Logout</Button>}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
};
export default Header;
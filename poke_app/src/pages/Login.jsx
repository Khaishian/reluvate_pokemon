import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import pokemon from '../assets/pokemon.png'
import forest from '../assets/forest.jpg'

export default function Login() {

    let isLoggedIn = true;

    const login = () => {
        
    }

    const signup = () => {

    }

    return (
        <Box 
        sx={{
          position: "fixed",
          zIndex: -1,
          top: 0,
          left: 0,
          width: '100%',
          height: "100vh",
          backgroundImage: `url(${forest})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'}}>
            <Container maxWidth="xl" sx={{mt: {xs:"100px", sm:"68px"}, pt:"20px"}}>
                <Box sx={{height:"80vh", alignItems:"center", justifyContent:"center", display:"flex"}}>
                    <Card sx={{padding:"50px", width:{xs:"auto",md:"auto"}}}>
                        <Box sx={{justifyContent:"center", display:"flex"}}>
                            <img style={{height: 300, marginTop: "-100px", marginBottom:"-100px"}} src={pokemon} alt="logo" />
                        </Box>
                        <br/>  
                        <br/>  
                        <TextField
                            id="filled-required"
                            label="Username"
                            defaultValue=""
                            variant="outlined"
                            sx={{width:"300px"}}
                        />
                        <br/>  
                        <br/>  
                        <TextField
                            id="filled-required"
                            label="password"
                            defaultValue=""
                            variant="outlined"
                            sx={{width:"300px"}}
                        />
                        <br/>  
                        <br/>
                        <Box sx={{justifyContent:"center", display:"flex"}}>
                            <Button sx={{borderRadius:"5px",':hover': {bgcolor: 'primary.dark', color: 'text.primary'}}} color="secondary" variant="contained" onClick={signup}>Sign Up</Button>
                            &nbsp;
                            <Button sx={{borderRadius:"5px",':hover': {bgcolor: 'primary.dark', color: 'text.primary'}}} color="secondary" variant="contained" onClick={login}>Login</Button>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
}
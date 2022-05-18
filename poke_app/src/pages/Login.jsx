import * as React from 'react';
import {useRef} from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import pokemon from '../assets/pokemon.png'
import forest from '../assets/forest.jpg'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {AppContext} from '../App';
import { loginUser, registerUser } from '../services/UserService';

export default function Login() {

    const {isLoggedIn, setIsLoggedIn} = React.useContext(AppContext)
    const usernameRef = useRef('')
    const passwordRef = useRef('')

    const login = async() => {
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        let data = {
            username: username,
            password: password
        }
        const response = await loginUser(data);
        if(response.access == null){
            handleClick("Login failed!");
        }else{
            setJwt(response.access);
            window.location.href = "/home";
        }
    }

    const signup = async() => {
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        let data = {
            username: username,
            password: password
        }
        const response = await registerUser(data);
        console.log(response)
        if(response.username == null){
            handleClick("Sign up failed!");
        }else{
            login(data);
        }
    }

    const setJwt = (jwt) => {
        localStorage.setItem('JWT', jwt);
        setIsLoggedIn(true)
    }

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open, setOpen] = React.useState(false);

    const [message, setMessage] = React.useState("");

    const handleClick = (message) => {
        setMessage(message)
        setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

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
            backgroundImage: `url(${forest})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: "brightness(0.8)",
            backgroundRepeat: 'no-repeat'}}>
            </Box>   
            <Container maxWidth="xl" sx={{mt: {xs:"100px", sm:"68px"}, pt:"20px"}}>
                <Box sx={{height:"80vh", alignItems:"center", justifyContent:"center", display:"flex"}}>
                    <Card sx={{padding:"50px", width:{xs:"auto",md:"auto"}}}>
                        <Box sx={{justifyContent:"center", display:"flex"}}>
                            <img style={{height: 300, marginTop: "-100px", marginBottom:"-100px"}} src={pokemon} alt="logo" />
                        </Box>
                        <br/>  
                        <br/>  
                        <TextField
                            inputRef={usernameRef}
                            id="filled-required"
                            label="Username"
                            defaultValue=""
                            variant="outlined"
                            sx={{width:"300px"}}
                        />
                        <br/>  
                        <br/>  
                        <TextField
                            inputRef={passwordRef}
                            id="filled-required"
                            label="password"
                            type="password"
                            defaultValue=""
                            variant="outlined"
                            sx={{width:"300px"}}
                        />
                        <br/>  
                        <br/>
                        <Box sx={{justifyContent:"center", display:"flex"}}>
                            <Button sx={{borderRadius:"5px",':hover': {bgcolor: 'primary', color: 'text.primary'}}} color="primary"  variant="contained" onClick={signup}>Sign Up</Button>
                            &nbsp;
                            <Button sx={{borderRadius:"5px",':hover': {bgcolor: 'primary', color: 'text.primary'}}} color="primary" variant="contained" onClick={login}>Login</Button>
                        </Box>
                    </Card>
                </Box>
            </Container>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    );
}
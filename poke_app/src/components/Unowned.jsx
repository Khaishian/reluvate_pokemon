import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Unowned() {

    let isLoggedIn = true;

    return (
        <Container maxWidth="xl" sx={{}}>
            <Typography sx={{}} color="white" textAlign="left" variant="h5">
                Unowned Pokemons 
            </Typography>
            <Card sx={{padding:"50px", width:{xs:"auto",md:"auto"}}}>
                        <Box sx={{justifyContent:"center", display:"flex"}}>
                        </Box>
                        <Box sx={{justifyContent:"center", display:"flex"}}>
                            &nbsp;
                        </Box>
                    </Card>
        </Container>
    );
}
import * as React from 'react';
import Container from '@mui/material/Container';

export default function Home() {

    let isLoggedIn = true;

    return (
        <Container maxWidth="xl" sx={{mt: {xs:"100px", sm:"68px"}, pt:"20px"}}>
            {!isLoggedIn && 
                <div>not Logged In</div>
            }
            {isLoggedIn && 
                <div>Logged In</div>
            }
        </Container>
    );
}
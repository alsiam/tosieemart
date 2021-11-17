import GoogleIcon from '@mui/icons-material/Google';
import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const Signup = () => {

    const history = useHistory();
    const location = useLocation();

    // getting data from context here 
    const { error, setError, registerUser, googleSignIn, user } = useAuth();

    // user state 
    const [userData, setUserData] = useState({});

    const handleBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...userData }
        newUser[field] = value;
        setUserData(newUser)
    }

    // register function 
    const handleSignUp = () => {
        if (userData.password !== userData.password2) {
            setError("You'r password didn't match !");
        }
        registerUser(userData.email, userData.password, userData.name, history, location);
        if (user?.email) {
            swal({
                title: "Good job!",
                text: "Registration successfully!",
                icon: "success",
            });
        }
    }

    // handle google signup 
    const handleGoogleSignIn = () => {
        googleSignIn(history, location)
    }

    return (
        <Container sx={{ my: 5 }}>
            <Box sx={{
                width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '50%',
                }, margin: 'auto',  py: 4
            }}>
                <Typography variant="h2" className="" style={{ fontWeight: 'bold' }}>REGISTER</Typography>

                {/* form here  */}
                <Box sx={{ py: 4 }}>
                    <TextField
                        sx={{ width: '80%', my: 1 }}
                        id="outlined-basic"
                        label="Name"
                        name="name"
                        variant="outlined"
                        onBlur={handleBlur}
                        required
                    />
                    <TextField
                        sx={{ width: '80%', my: 1 }}
                        id="outlined-basic"
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        onBlur={handleBlur}
                        required
                    />
                    <TextField
                        sx={{ width: '80%', my: 1 }}
                        id="outlined-basic"
                        label="Password"
                        name="password"
                        type="password"
                        variant="outlined"
                        onBlur={handleBlur}
                        required
                    />
                    <TextField
                        sx={{ width: '80%', my: 1 }}
                        id="outlined-basic"
                        label="Confirm Password"
                        name="password2"
                        type="password"
                        variant="outlined"
                        onBlur={handleBlur}
                        required
                    /> <br />

                    <Button
                        onClick={handleSignUp}
                        sx={{ width: '80%', my: 1, bgcolor: 'secondary.main' }}
                        type="submit"
                        size="large"
                        variant="contained">
                        Register
                    </Button>

                    <br />

                    <Typography variant="subtitle1"> Already have an account ? <NavLink to="/login">Login</NavLink> </Typography>

                    <Typography variant="subtitle1" className="title-2"> OR </Typography>

                    <Button
                        onClick={() => handleGoogleSignIn(history, location)}
                        sx={{ my: 1, bgcolor: 'secondary.main' }}
                        variant="contained">
                        <GoogleIcon /> <Box sx={{ px: 2 }}> Google signin</Box>
                    </Button>
                    {error && <Alert severity="error">{error}</Alert>}
                </Box>
            </Box>
        </Container>
    );
};

export default Signup;
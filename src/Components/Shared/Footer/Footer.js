import { Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../../image/logo.png';

const Footer = () => {
    return (
        <Box style={{ backgroundColor: '#212121', color: '#CECECE' }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ py: 8, textAlign: 'start' }}>
                    <Grid item md={4}>
                        <Typography sx={{ py: 1 }} variant="body2">Shopping is an activity in which a customer browses the available goods or services presented by one or more retailers with the potential intent to purchase a suitable selection of them.</Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography sx={{ py: 1, color: '#fff' }} variant="h5">ADDRESS</Typography>
                        <Box>
                            <Typography sx={{ py: 1 }} variant="button">Mobile: <span>+088 016*****</span></Typography> <br />
                            <Typography sx={{ py: 1 }} variant="button">Office: <span>Dhaka, Bangladesh </span> </Typography> <br />
                            <Typography sx={{ py: 1 }} variant="button">Email: <span>alsiamworld@gmail.com</span></Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Typography sx={{ py: 1, color: '#fff', textAlign: 'left' }} variant="h5">SIGN UP TO NEWSLETTER</Typography>
                        <TextField variant="filled" sx={{ bgcolor: '#fff' }} fullWidth label="Email" id="fullWidth" />
                    </Grid>
                </Grid>
            </Container>
            <Typography sx={{ color: '#fff', textAlign: 'right' }} variant="caption">All rights are reserved by &copy; Al Store</Typography>
        </Box>
    );
};

export default Footer;
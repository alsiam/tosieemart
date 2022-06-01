import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <Box className="banner-background" sx={{ py: 8 }}>
            <Container>
                <Grid item md={12} sx={{ textAlign: 'start' }}>
                    <Typography variant="h5" style={{ color: '#FFF', fontWeight: 'normal' }}>Welcome To</Typography>
                    <Typography variant="h2" style={{ color: '#FFF', fontWeight: 'bold' }}> <Typography variant="h2" style={{ color: '#FFF', fontWeight: 'bold' }}>Tosieemart</Typography></Typography>mart
                    <Typography variant="body1" style={{ color: '#E7E6E1' }}>A market is a composition of systems, institutions, procedures, social relations or infrastructures whereby parties engage in exchange. While parties may exchange goods and services by barter, most markets rely on sellers offering their goods or services to buyers in exchange for money</Typography>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;
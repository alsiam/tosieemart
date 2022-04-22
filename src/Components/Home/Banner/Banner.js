import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import drone from '../../../image/drone.png';
import './Banner.css';


const Banner = () => {
    return (
        <Box className="banner-background" sx={{ py: 16 }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item md={5} >
                        <img className="img-banner" src={drone} alt="" />
                    </Grid>
                    <Grid item md={7} sx={{ textAlign: 'start' }}>
                        <Typography variant="h5" style={{ color: '#FFF', fontWeight: 'normal' }}>Welcome To</Typography>
                        <Typography variant="h2" style={{ color: '#FFF', fontWeight: 'bold' }}>Tosieemart</Typography>
                        <Typography variant="body1" style={{ color: '#E7E6E1' }}>A market is a composition of systems, institutions, procedures, social relations or infrastructures whereby parties engage in exchange. While parties may exchange goods and services by barter, most markets rely on sellers offering their goods or services to buyers in exchange for money</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;
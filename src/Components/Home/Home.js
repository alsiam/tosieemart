import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import ProductsBrands from './ProductsBrands/ProductsBrands';
import Reviews from './Reviews/Reviews';
import Products from './Products/Products';
import { Skeleton } from '@mui/material';

const Home = () => {

    return (
        <div>
            <Navigation />
            <Banner />
            <Products />
            <Reviews />
            <ProductsBrands />
            <Footer />
        </div>
    );
};

export default Home;
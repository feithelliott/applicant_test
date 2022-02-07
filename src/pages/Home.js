import React from 'react';
import HealthBanners from '../components/HealthBanners';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';


const Home = () => {
    return(
        <>
            <Hero></Hero>
            <HealthBanners/>
            <ProductList></ProductList>
        </>
    );
};

export default Home;
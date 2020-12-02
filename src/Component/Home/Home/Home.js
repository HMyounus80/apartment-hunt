import React from 'react';
import Header from '../Header/Header';
import Apartment from '../Apartment/Apartment';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Apartment></Apartment>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;
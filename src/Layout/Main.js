import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Home/Shared/Footer/Footer';
import Header from '../Components/Home/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
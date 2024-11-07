import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Inicio from '../../../Pages/Inicio/Inicio'
import QuienesSomos from '../../../Pages/QuienesSomos/QuienesSomos'
import segundoCarousel from '../../../Pages/SegundoCarousel/segundoCarousel'

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <NavBar />

            <Inicio />
            <QuienesSomos />
            <segundoCarousel />
                
            

            <Footer />

        </BrowserRouter>
    )
}
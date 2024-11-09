import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from '../Components/NavBar/NavBar/NavBar';
import Footer from '../Components/NavBar/Footer/Footer';
import Inicio from '../Pages/Inicio/Inicio'
import QuienesSomos from '../Pages/QuienesSomos/QuienesSomos'
import SegundoCarousel from '../Pages/SegundoCarousel/SegundoCarousel';
import Nosotras from '../Pages/Nosotras/Nosotras'
import Valores from '../Pages/Valores/Valores'
import Cursos from '../Pages/Cursos/Cursos'

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <NavBar />

            <Inicio />
            <QuienesSomos />
            <SegundoCarousel />
            <Nosotras />
            <Valores />
            <Cursos />
            

            <Footer />

        </BrowserRouter>
    )
}
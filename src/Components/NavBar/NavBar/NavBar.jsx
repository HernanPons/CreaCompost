import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" className="logo-image" />
        <span className="logo-text">
          <span className='logo-text1'>crea compost</span>
          <br />
          <span className='logo-text2'>crea verde</span>
        </span>
      </div>

      <ul className="navbar-menu">
        <li><a href="#crea">CREA</a></li>
        <li><a href="#quienes-somos">¿QUIENES SOMOS?</a></li>
        <li><a href="#tienda">TIENDA</a></li>
        <li><a href="#cursos">CURSOS</a></li>
        <li><a href="#instituciones">INSTITUCIONES</a></li>
        <li><a href="#proyectos">PROYECTOS</a></li>
      </ul>

      <div className="navbar-icons">
        <a href="#email"><i className="icon-envelope"></i></a>
        <a href="#instagram"><i className="icon-instagram"></i></a>
        <a href="#whatsapp"><i className="icon-whatsapp"></i></a>
        <a href="#cart"><i className="icon-cart"></i></a>
      </div>

    </nav>
  );
};

export default NavBar;

import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <img src="/Images/Logo.png" alt="Logo" className="logo-image" />
        <span className="logo-text">
          <span className='logo-text1 sansBold'>crea compost</span>
          <br />
          <span className='logo-text2 sansBold'>crea verde</span>
        </span>
      </div>

      <ul className="navbar-menu sansBold">
        <li><a href="#crea">CREA</a></li>
        <li><a href="#quienes-somos">¿QUIENES SOMOS?</a></li>
        <li><a href="#tienda">TIENDA</a></li>
        <li><a href="#cursos">CURSOS</a></li>
        <li><a href="#instituciones">INSTITUCIONES</a></li>
        <li><a href="#proyectos">PROYECTOS</a></li>
      </ul>

      <div className="navbar-icons">
        <a href="https://mail.google.com/mail/?view=cm&to=creacompostcreaverde@gmail.com" target="_blank">
        <i className="icon-envelope"></i>
        </a>
        <a href="https://www.instagram.com/creacompostcreaverde/" target="_blank"><i className="icon-instagram"></i></a>
        <a href="https://wa.me/+5493513063528" target="_blank"><i className="icon-whatsapp"></i></a>
        <a href="https://tiendanube.com" target="_blank"><i className="icon-cart"></i></a>
      </div>

    </nav>
  );
};

export default NavBar;

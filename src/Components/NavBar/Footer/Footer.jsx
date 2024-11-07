import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="logo.png" alt="Logo" className="footer-logo-image" />
          <div className="footer-logo-text">
            <p>crea compost</p>
            <p>crea verde</p>
          </div>
        </div>

        <nav className="footer-menu">
          <a href="#ayuda">Ayuda</a>
          <a href="#contactanos">Contáctanos</a>
          <a href="#terminos">Términos y Condiciones</a>
        </nav>

        <div className="footer-icons">
          <a href="#mail" className="icon-mail">📘</a>
          <a href="#instagram" className="icon-instagram">📸</a>
          <a href="#whatsapp" className="icon-hatsapp">📲</a>
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <p>2024 crea compost crea verde. Todos los derechos reservados</p>
        <p>Diseñado por: Equipo UX/UI</p>
      </div>
    </footer>
  );
}

export default Footer;

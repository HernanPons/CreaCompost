import React from 'react';
import './Footer.css';

function Footer() {
  return (
  <div className='sansBold'>
    <div className='tarjetaFooter'>
      <div className='logoFooter'>
      <img src="/Images/Logo.png" alt="Logo" className="footer-logo-image" />
          <div className="footer-logo-text">
            <p className='text-green'>crea compost</p>
            <p className='text-green2'>crea verde</p>
          </div>
      </div>
      <br />
      <div>
        <p>Contactanos</p>
        <br />
        <br />
        <p>Valle Escondido Córdoba Capital, Argentina.</p>
        <br />
        <p>Teléfono: <a href="https://wa.me/+5493513063528" target="_blank"> +54 9 351 5050090 </a></p>
        <br />
        <div className='logoFooter'><p>mail:</p><a href="   agregar vinculo al mail   " className='text-green2'>creacompostcreaverde@gmail.com</a></div>
      </div>
      <br />
      
      +54 9 351 5050090

    </div>
    
    <div>
      <img src="/Images/FotoFooter.png" alt="hojas chiquitas verdes con 3 flores amarillas" className='fotoFooter'/>
    </div>




    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/Images/Logo.png" alt="Logo" className="footer-logo-image" />
          <div className="footer-logo-text">
            <p className='text-green'>crea compost</p>
            <p className='text-green2'>crea verde</p>
          </div>
        </div>

        <nav className="footer-menu">
          <a href="#ayuda">Ayuda</a>
          <a href="#contactanos">Contáctanos</a>
          <a href="#terminos">Términos y Condiciones</a>
        </nav>

        <div className="footer-icons">
        <a href="https://mail.google.com/mail/?view=cm&to=creacompostcreaverde@gmail.com" target="_blank">
        <i className="icon-envelope"></i>
        </a>
        <a href="https://www.instagram.com/creacompostcreaverde/" target="_blank"><i className="icon-instagram"></i></a>
        <a href="https://wa.me/+5493513063528" target="_blank"><i className="icon-whatsapp"></i></a>
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <p className='text-green2'>2024 crea compost crea verde. Todos los derechos reservados</p>
        <p className='text-green2'>Diseñado por: Equipo UX/UI</p>
      </div>
    </footer>
  </div>
  );
}

export default Footer;

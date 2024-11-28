import React, { useState, useEffect } from 'react';
import './Inicio.css';

const images = [
  '/Images/Carousel1.png',
  '/Images/Carousel2.png',
  /* '/Images/Carousel3.png', */
  '/Images/Carousel4.jpg',
  '/Images/Carousel5.jpg',
];

const texts = [
  { firstPart: "Crea compost,", secondPart: " transformá tus residuos organicos en abono para tus plantas." },
  { firstPart: "Crea verde,", secondPart: " obtené tus propios alimentos, nada se pierde todo se transforma" },
  /* { firstPart: '"la magia y las maravillas del mundo se contruyen en red"', secondPart: " Laura Pantoja" }, */
  { secondPart: "¿has soñado con cultivar tus propios alimentos en casa?" },
  { firstPart: "te ayudamos a hacerlo a partir de tus residuos orgánicos.", secondPart: "sumate a compostar!" },
];

const Inicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Cambia la duración si quieres un intervalo diferente

    return () => clearInterval(interval);
  }, []);

  // Función para ir a una imagen específica
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className='encabezado' id='crea'>
        <h1 className='text-gray'>¡Hola!</h1>
        <div className='encabezado2'>
          <h2 className='text-gray'>Somos</h2>
          <h2 className='text-green'>crea compost</h2>
          <h2 className='text-green2'>crea verde</h2>
        </div>
      </div>

      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <div className="sidebar">
                <h1>
                  <span
                    className={`${
                      image === '/Images/Carousel5.jpg' ? 'text-gray' : 'text-green'
                    }`}
                  >
                  {texts[index].firstPart}
                  </span>
                  <span
                    className={`${
                      image === '/Images/Carousel5.jpg' ? 'text-green' : 'text-gray'
                    } ${
                      texts[index].secondPart === "sumate a compostar!" ? "text-lower" : ""
                    }`}
                  >
                  {texts[index].secondPart}
                  </span>
                </h1>
              </div>
              <img src={image} alt={`Slide ${index}`} className="carousel-image" />
            </div>
          ))}
        </div>

        {/* BOTONES INFERIORES PARA EL CAROUSEL */}
        <div className="carousel-controls">
          <button
            className={`carousel-circle ${currentIndex === 0 ? 'active' : ''}`}
            onClick={() => goToSlide(0)}
          ></button>
          <button
            className={`carousel-circle ${currentIndex === 1 ? 'active' : ''}`}
            onClick={() => goToSlide(1)}
          ></button>
          <button
            className={`carousel-circle ${currentIndex === 2 ? 'active' : ''}`}
            onClick={() => goToSlide(2)}
          ></button>
          <button
            className={`carousel-circle ${currentIndex === 3 ? 'active' : ''}`}
            onClick={() => goToSlide(3)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;

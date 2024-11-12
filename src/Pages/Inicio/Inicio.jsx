import React, { useState, useEffect } from 'react';
import './Inicio.css';


const images = [
  '/Images/Carousel1.png',
  '/Images/Carousel2.png',
  '/Images/Carousel3.png',
];

const texts = [
  { firstPart: "Crea compost,", secondPart: " transformá tus residuos organicos en abono para tus plantas." },
  { firstPart: "Crea verde,", secondPart: " obtené tus propios alimentos, nada se pierde todo se transforma" },
  { firstPart: '"la magia y las maravillas del mundo se contruyen en red"', secondPart: " Laura Pantoja" },
];

const Inicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia la duración si quieres un intervalo diferente

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div>
      
      <div className='encabezado sansBold'>
        <h1 className='text-gray'>¡Hola!</h1>
        <div className='encabezado2'>
          <h2 className='text-gray'>Somos</h2><h2 className='text-green'>crea compost</h2><h2 className='text-green2'>crea verde</h2>
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
                  <span className="text-green">{texts[index].firstPart}</span>
                  <span className={`text-gray ${texts[index].secondPart === " Laura Pantoja" ? "text-lower" : ""}`}
                  >
                    {texts[index].secondPart}
                  </span>
                </h1>
              </div>
              <img src={image} alt={`Slide ${index}`} className="carousel-image" />
            </div>
          ))}
        </div>
        <button className="carousel-button prev" onClick={goToPrevious}>❮</button>
        <button className="carousel-button next" onClick={goToNext}>❯</button>
      </div>
    </div>
  );
}

export default Inicio;

import React, { useState, useEffect } from 'react';
import './SegundoCarousel.css'


const images = [
  '/Images/SegundoCarousel1.png',
  '/Images/SegundoCarousel2.png',
  '/Images/SegundoCarousel3.png',
];

const segundoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };


  return (
    <div segundoCarouselContainer>

      <div className="segundoCarousel">
        <div
          className="segundoCarousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="segundoCarousel-slide">
              
              <img src={image} alt={`Slide ${index}`} className="segundoCarousel-image" />
            </div>
          ))}
        </div>
        <button className="segundoCarousel-button prev" onClick={goToPrevious}>❮</button>
        <button className="segundoCarousel-button next" onClick={goToNext}>❯</button>
      </div>
    </div>
  );
}

export default segundoCarousel
import React, { useState, useEffect } from 'react';
import './carouselle.scss';

const Carouselle = ({ slides }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const handleMouseDown = (event) => {
    setDragStartX(event.clientX);
  };


  const handleMouseUp = (event) => {
    if (dragStartX) {
      const deltaX = event.clientX - dragStartX;
      if (deltaX > 50) {
        prevSlide();
        setDragStartX(0);
      } else if (deltaX < -50) {
        nextSlide();
        setDragStartX(0);
      }
    }
  };
  const nextSlide = () => {
    setCurrentPage((prevPage) => (prevPage === slides.length - 1 ? 0 : prevPage + 1));
  };

    const prevSlide = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? slides.length - 1 : prevPage - 1));
  }
  useEffect(() => {
    const handleGlobalMouseDown = (event) => {
      event.preventDefault();
    };
  
    document.addEventListener('mousedown', handleGlobalMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
  
    return () => {
      document.removeEventListener('mousedown', handleGlobalMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragStartX]);
  const goToSlide = (index) => {
    setCurrentPage(index);
  }

  const renderSlides = () => {
    return slides.map((slide, index) => (
      <div
        key={index}
        className={`slide ${index === currentPage ? 'active animate-in' : ''}`}
        onMouseDown={handleMouseDown}
      >
        {slide}
      </div>
    ));
  };

  return (
    <div className="carouselle">
      <div className="carouselle__current__slide">
        {renderSlides()}
      </div>

      <div className="carouselle__navigation">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`carouselle__navigation__item ${index === currentPage ? 'slide-navigation-active' : ''}`}
           onClick={() => goToSlide(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default Carouselle;
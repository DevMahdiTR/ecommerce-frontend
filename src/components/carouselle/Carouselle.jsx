import React, { useState, useEffect } from 'react';
import './carouselle.scss';

const Carouselle = ({ slides }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextSlide = () => {
    setCurrentPage((prevPage) => (prevPage === slides.length - 1 ? 0 : prevPage + 1));
  };

    const prevSlide = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? slides.length - 1 : prevPage - 1));
    }
  useEffect(() => {
  }, [currentPage]);

  const goToSlide = (index) => {
    setCurrentPage(index);
  }

  const renderSlides = () => {
    return slides.map((slide, index) => (
      <div
        key={index}
        className={`slide ${index === currentPage ? 'active animate-in' : ''}`}
        style={{zIndex: index === currentPage ? 1 : 0}}
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
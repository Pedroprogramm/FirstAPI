import React, { useState } from 'react';
import './slide-home.scss'

const SliderHome = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
  
    const goToPrevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 1 ? 5 : prevSlide - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 5 ? 1 : prevSlide + 1));
    };
  
    return (
      <div className=".container-slider-home">
        <div className="itc-slider">
          <div className="itc-slider__wrapper">
            <div
              className="itc-slider__items"
              style={{ transform: `translateX(-${(currentSlide - 1) * 50}%)` }}
            >
              <div className="itc-slider__item">
                {/* Контент 1 слайда */}
                1
              </div>
              <div className="itc-slider__item">
                {/* Контент 2 слайда */}
                2
              </div>
              <div className="itc-slider__item">
                {/* Контент 3 слайда */}
                3
              </div>
              <div className="itc-slider__item">
                {/* Контент 4 слайда */}
                4
              </div>
              <div className="itc-slider__item">
                {/* Контент 5 слайда */}
                5
              </div>
            </div>
          </div>
          <button className="itc-slider__btn itc-slider__btn_prev" onClick={goToPrevSlide}></button>
          <button className="itc-slider__btn itc-slider__btn_next" onClick={goToNextSlide}></button>
        </div>
      </div>
    );
  };
  
export default SliderHome;
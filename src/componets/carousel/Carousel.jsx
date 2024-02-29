// carousel.jsx
import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./carousel.scss";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide) => (slide === data.slides.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? data.slides.length - 1 : slide - 1));
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.slides.map((item, idx) => (
        <div key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}>
          <img src={item.src} alt={item.alt} />
          <div className="text-container">
            <p>{item.title}</p>
          </div>
        </div>
      ))}
      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
      <span className="indicators">
        {data.slides.map((_, idx) => (
          <button
            key={idx}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Carousel;

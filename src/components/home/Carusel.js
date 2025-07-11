import React, { useState } from 'react';
import left from '../../image/Vector.png'
import right from '../../image/Vector (1).png'
import { Carousel } from 'react-bootstrap';
import '../../css/home/carusel.css'

export default function Carusel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === 1 ? 0 : prev + 1));
  };
  return (
    <>
      <Carousel activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        interval={5000}>
        <Carousel.Item>
          <div className="hero slide1">
            <h1 className="text-white sub_title">Tuproqqal’a tumani axborot kutubxona markazi</h1>

            <div className="d-flex align-items-start layout">
              <img src={left} className="left" alt="left" />
              <p className="text-white motto">
                Kitob – bizning kuchimiz,<br /> kelajagimiz poydevori!
              </p>
              <img src={right} className="right" alt="right" onClick={goNext} />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="hero slide2">
            <h1 className="text-white sub_title">Tuproqqal’a tumani axborot kutubxona markazi</h1>

            <div className="d-flex align-items-start layout">
              <img src={left} className="left" alt="left" onClick={goPrev} />
              <p className="text-white motto">
                Kitob – bizning kuchimiz, kelajagimiz poydevori!
              </p>
              <img src={right} className="right" alt="right" onClick={goNext} />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

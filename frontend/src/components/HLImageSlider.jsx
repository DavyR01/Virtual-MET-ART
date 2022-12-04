import React, { useState } from "react";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import "../styles/Highlights.css";
import Item from "./Gallery/Item";

function HLImageSlider() {
  const [current, setCurrent] = useState(0);
  const [showArrow, setShowArrow] = React.useState(true);

  const highlightIds = [
    11417, 436532, 436105, 436545, 437394, 437881, 438754, 437329, 204812,
    438817, 437153, 437790,
  ];

  const nextSlide = () => {
    setCurrent(current === highlightIds.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? highlightIds.length - 1 : current - 1);
  };

  // console.log(current);

  if (!Array.isArray(highlightIds) || highlightIds.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider lg:overflow-hidden">
        {showArrow && (
          <FaArrowAltCircleUp className="left-arrow" onClick={prevSlide} />
        )}
        {showArrow && (
          <FaArrowAltCircleDown className="right-arrow" onClick={nextSlide} />
        )}
        {highlightIds.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={slide}
            >
              {index === current && (
                <Item id={slide} setShowArrow={setShowArrow} />
              )}
            </div>
          );
        })}
      </section>
      <section className="hlMobile">
        {highlightIds.map((id) => (
          <Item id={id} key={id} />
        ))}
        {/* {highlightIds.map((slide) => {
          return <Item id={slide} key={slide} />;
        })} */}
      </section>
    </>
  );
}

export default HLImageSlider;

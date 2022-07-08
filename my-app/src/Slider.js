import React, { useState, useEffect, useRef } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./Slider.css";
import Slider__motog42 from "./Image/Slider_motog42.png";
import Slider__colorful from "./Image/Slider_colorful.png";
import Slider_bulb from "./Image/Slider_bulb.png";

function Slider() {
  const sliders = [Slider__motog42, Slider_bulb, Slider__colorful];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [hover, setHover] = useState(false);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // if (hover) {
  //   console.log("yes");
  // }

  useEffect(() => {
    // console.log(hover);
    // if (hover) {
    //   return;
    // }
    timeoutRef.current = setTimeout(() => {
      index === sliders.length ? setIndex(0) : setIndex(index + 1);
    }, `${index === 3 ? 1 : 3000}`);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div
      className="Slider"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        // resetTimeout();
        // setIndex(index);
        setHover(false);
      }}
    >
      <div className="Slider__front">
        <div
          className={
            index === 0
              ? " Slider__container Slider__conatainer_transform-transitonX_-1310"
              : index === 1
              ? "Slider__container Slider__conatainer_transform-transitonX_-2620"
              : index === 2
              ? "Slider__container Slider__conatainer_transform-transitonX_-3930"
              : index === 3
              ? "Slider__container Slider__conatainer_transform-transitonX_0"
              : ""
          }
          style={{ height: "100%", width: "6475px", display: "flex" }}
        >
          <div className="Slider__imageContainer">
            <img className="Slider__image" src={sliders[2]} />
          </div>
          <div className="Slider__imageContainer">
            <img className="Slider__image" src={sliders[0]} />
          </div>
          <div className="Slider__imageContainer">
            <img className="Slider__image" src={sliders[1]} />
          </div>
          <div className="Slider__imageContainer">
            <img className="Slider__image" src={sliders[2]} />
          </div>
        </div>
        {/* <div className="Slider__buttons"> */}
        <div
          className="Slider__button Slider__button-left"
          onClick={() =>
            setIndex((index) => (index === 0 ? sliders.length - 1 : index - 1))
          }
        >
          <button>
            <ChevronLeftIcon />
          </button>
        </div>
        <div
          className="Slider__button Slider__button-right"
          onClick={() =>
            setIndex((index) => (index === sliders.length ? 0 : index + 1))
          }
        >
          <button>
            <ChevronRightIcon />
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Slider;

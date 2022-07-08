import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./Productrow.css";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function Productrow() {
  const products = [
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/juk4gi80/air-freshener/z/w/r/10-gel-click-gel-godrej-aer-original-imaffnk4fwhezjer.jpeg?q=70",
      title: "Car Air Freshners",
      offer: "Min. 40% Off",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/ktn9pjk0/candle/c/k/9/home-decor-scented-30-pk-brown-9gtl30300012gt0300-modern-home-original-imag6y3cpcww3hd3.jpeg?q=70",
      title: "Candles",
      offer: "Min. 50% Off",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/kwv0djk0/nut-dry-fruit/z/b/m/-original-imag9fuspyz4qjvm.jpeg?q=70",
      title: "Food Products",
      offer: "Min. 20% Off",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/jy0frm80/deodorant/g/f/p/400-hamilton-deodorant-body-spray-denver-men-original-imafgb9fsafampwz.jpeg?q=70",
      title: "Fragrances",
      offer: "Min. 30% Off",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/kjkbv680-0/face-wash/l/r/7/450-face-wash-clean-clear-original-imafz3hz4fgwhfnf.jpeg?q=70",
      title: "Body And Face Care",
      offer: "Min. 20% Off",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/km9ht3k0/compact/c/e/2/fit-me-shade-128-compact-powder-8g-powder-that-protects-skin-original-imagf78zhygarzzy.jpeg?q=70",
      title: "Makeup",
      offer: "Min. 20% Off",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/krxtrww0/hair-oil/c/c/u/650-almond-drop-650-ml-bajaj-original-imag5mcjqkgbprnm.jpeg?q=70",
      title: "Hair Care And Accessory",
      offer: "Min. 20% Off",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/l4d2ljk0/hair-oil/q/1/6/32-2-x-faster-beard-growth-oil-with-100-natural-ingredients-original-imagf9wmm3hzrgst.jpeg?q=70",
      title: "Shaving & Beard Care",
      offer: "Min. 30% Off",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/l34ry4w0/antiseptic/s/l/w/-original-imagebbgmruhgtjp.jpeg?q=70",
      title: "Home Medicines",
      offer: "Min. 10% Off",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/kmxsakw0/milk-drink-mix/8/l/k/inner-strength-formula-carton-cadbury-bournvita-original-imagfq3fywyzhfew.jpeg?q=70",
      title: "Health Supplements",
      offer: "Min. 10% Off",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/kt39jm80/vitamin-supplement/n/k/9/60-hnut19879-01-omega-fatty-acids-fish-oil-healthkart-original-imag6gz38tzsxpa5.jpeg?q=70",
      title: "Vitamin Supplement",
      offer: "Min. 30% Off",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/k4k7f680/bulb/9/x/z/9w-inverter-bulb-wipro-original-imafkf52wvpydnpd.jpeg?q=70",
      title: "Utility Lighting",
      offer: "Min. 50% Off",
    },
  ];

  const [leftButtonDisplay, setLeftButtonDisplay] = useState(false);
  const [rightButtonDisplay, setRightButtonDisplay] = useState(true);

  const [translateAmount, setTranslateAmount] = useState(0);
  const [index, setIndex] = useState(5);

  let length = products.length;
  // let index = 5; // It doesn't store the curent value of index for the next render

  // 195 is the width of each product container
  function handleRightButtonClick() {
    if (index + 5 <= length) {
      setTranslateAmount(translateAmount - 195 * 5);
      setIndex(index + 5);
      setRightButtonDisplay(true);
      setLeftButtonDisplay(true);
    } else if (index + 5 > length) {
      setTranslateAmount(translateAmount - 195 * (length - index));
      setIndex(length);
      setRightButtonDisplay(false);
      setLeftButtonDisplay(true);
    }
  }

  function handleLeftButtonClick() {
    if (index - 5 >= 5) {
      setTranslateAmount(translateAmount + 195 * 5);
      setIndex(index - 5);
      setRightButtonDisplay(true);
      setLeftButtonDisplay(true);
    } else if (index - 5 < 5) {
      setTranslateAmount(translateAmount + 195 * (index - 5));
      setIndex(5);
      setLeftButtonDisplay(false);
      setRightButtonDisplay(true);
    }
  }

  useEffect(() => {
    if (index === 5) setLeftButtonDisplay(false);
    if (index === length) setRightButtonDisplay(false);
  }, [index]);

  return (
    <div className="Productrow">
      <div className="Productrow__header">
        <div>
          <h2 className="Productrow__title">Shop Monthly Essentials</h2>
          <div className="Productrow__view-all-button">
            <a>View all</a>
          </div>
        </div>
      </div>
      <div
        className="Productrow__products"
        style={{ transform: `translateX(${translateAmount}px)` }}
      >
        {products.map((product, index) => (
          <Product
            image={product.image}
            title={product.title}
            offer={product.offer}
            key={index}
          />
        ))}
      </div>

      <button
        className={
          leftButtonDisplay
            ? "Productrow__button Productrow__btton-left"
            : "Productrow__button Productrow__btton-left Productrow__button__display-none"
        }
        onClick={() => {
          handleLeftButtonClick();
        }}
      >
        <ChevronLeftIcon />
      </button>
      <button
        className={
          rightButtonDisplay
            ? "Productrow__button Productrow__btton-right"
            : "Productrow__button Productrow__btton-right Productrow__button__display-none"
        }
        onClick={() => {
          handleRightButtonClick();
        }}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}

export default Productrow;

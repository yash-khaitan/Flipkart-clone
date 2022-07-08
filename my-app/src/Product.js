import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="Product">
      <a>
        <div className="Product__image">
          <img src={props.image} />
        </div>
        <div className="Product__title">{props.title}</div>
        <div className="Product__offer">{props.offer}</div>
        <div className="Product__sentence">Grab The Best Deal!!!</div>
      </a>
    </div>
  );
}

export default Product;

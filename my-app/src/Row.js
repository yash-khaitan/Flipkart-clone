import React from "react";
import Productrow from "./Productrow";
import Sidebanner from "./Sidebanner";
import "./Row.css";

function Row() {
  return (
    <div className="Row">
      <Productrow />
      <Sidebanner />
    </div>
  );
}

export default Row;

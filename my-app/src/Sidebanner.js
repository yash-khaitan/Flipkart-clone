import React from "react";
import "./Sidebanner.css";
import sidebannerPoster from "./Image/Side__banner.webp";

function Sidebanner() {
  return (
    <div className="Sidebanner">
      <a>
        <div className="Sidebanner__image__background-padding">
          <div className="Sidebanner__image">
            <img src={sidebannerPoster} />
          </div>
        </div>
      </a>
    </div>
  );
}

export default Sidebanner;

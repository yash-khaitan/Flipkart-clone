import React from "react";
import "./Moreitem.css";

function Moreitem(props) {
  return (
    <div className="Moreitem">
      <div className="Moreitem__icon">{props.icon}</div>
      <div className="Moreitem__text">{props.text}</div>
    </div>
  );
}

export default Moreitem;

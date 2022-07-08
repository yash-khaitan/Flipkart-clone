import React, { useState } from "react";
import "./Dropdownmenu.css";
import Dropdownitem from "./Dropdownitem";

function Dropdownmenu(props) {
  return (
    <div
      className={
        props.last ? "Dropdownmenu Dropdownmenu-tanslateX-100" : "Dropdownmenu"
      }
    >
      <div className="Dropdownmenu__left">
        {props.items_array.map((items, index) => (
          <ul key={index}>
            <Dropdownitem
              text={items.text}
              sidemenu={items.sidemenu}
              sidemenuItems_array={items.sidemenuItems}
              last={props.last}
            />
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Dropdownmenu;

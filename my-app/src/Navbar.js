import React from "react";
import "./Navbar.css";
import Navitem from "./Navitem";
import Topoffers from "./Image/top_offers.png";
import Grocery from "./Image/grocery.png";
import Mobiles from "./Image/mobiles.webp";
import Fashion from "./Image/fashion.webp";
import Electronics from "./Image/electronics.webp";
import Home from "./Image/home.webp";
import Appliances from "./Image/appliances.webp";
import Travel from "./Image/travel.webp";
import Beauty_Toys_More from "./Image/beauty,toys&more.webp";

function Navbar() {
  // an array for the navitems + image + dropdownmenu + last.
  const navitems_array = [
    { image: Topoffers, text: "Top offers", Dropdownmenu: false, last: false },
    { image: Grocery, text: "Grocery", Dropdownmenu: false, last: false },
    { image: Mobiles, text: "Mobiles", Dropdownmenu: false, last: false },
    { image: Fashion, text: "Fashion", Dropdownmenu: true, last: false },
    {
      image: Electronics,
      text: "Electronics",
      Dropdownmenu: true,
      last: false,
    },
    { image: Home, text: "Home", Dropdownmenu: true, last: false },
    { image: Appliances, text: "Appliances", Dropdownmenu: false, last: false },
    { image: Travel, text: "Travel", Dropdownmenu: false, last: false },
    {
      image: Beauty_Toys_More,
      text: "Beauty,Toys&More",
      Dropdownmenu: true,
      last: true,
    },
  ];
  return (
    <div className="Navbar">
      <div className="Navbar__content">
        {navitems_array.map((navitem, index) => (
          <div key={index}>
            <Navitem
              image={navitem.image}
              text={navitem.text}
              Dropdownmenu={navitem.Dropdownmenu}
              last={navitem.last}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import "./Navitem.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dropdownmenu from "./Dropdownmenu";

function Navitem(props) {
  // Here make an array for dropdown items + more items for those items.

  // items[item's text + sidemenu true or false ? + sidebar's item
  const dropdownItems_array = [
    {
      navitem: "Fashion",
      items: [
        {
          text: "Men's Top Wear",
          sidemenu: true,
          sidemenuItems: [
            "All",
            "Men's T-shirt",
            "Men's Casual Shirt",
            "Men's Kurtas",
            "Men's Blazers",
          ],
        },
        { text: "Men's Bottom Wear", sidemenu: false },
        {
          text: "Women Ethnic",
          sidemenu: true,
          sidemenuItems: [
            "All",
            "Women Sarees",
            "Ethnic Dresses",
            "Women Gowns",
            "Women Dupatta",
          ],
        },
        { text: "Women Western", sidemenu: false },
        { text: "Men Footwear", sidemenu: false },
        { text: "Watches and Accessories", sidemenu: false },
        { text: "Winter", sidemenu: false },
      ],
    },
    {
      navitem: "Electronics",
      items: [
        {
          text: "Audio",
          sidemenu: true,
          sidemenuItems: [
            "All",
            "Bluetooth Headphones",
            "Wired Headphones",
            "Soundbars",
            "Home Theatres",
            "Remote Control",
          ],
        },
        { text: "Cameras & Accessories", sidemenu: false },
        {
          text: "Gaming",
          sidemenu: true,
          sidemenuItems: [
            "All",
            "Gaming Consoles",
            "Gaming Mouse",
            "Gamepads",
            "Games",
            "Controllers",
          ],
        },
        { text: "Laptop Accessories", sidemenu: false },
        { text: "Powerbank", sidemenu: false },
        { text: "Mobile Accessory", sidemenu: false },
        { text: "Laptop", sidemenu: false },
        { text: "Headphones", sidemenu: false },
      ],
    },
    {
      navitem: "Home",
      items: [
        {
          text: "Home furnishings",
          sidemenu: true,
          sidemenuItems: [
            "All",
            "Bed Linens",
            "Bedsheets",
            "Bath linen",
            "Floor covering",
          ],
        },
        { text: "Furniture Studio", sidemenu: false },
        { text: "Living Room Furniture", sidemenu: false },
        { text: "Home Decor", sidemenu: false },
        {
          text: "Bedroom Furniture",
          sidemenu: true,
          sidemenuItems: [
            "All",
            "Mattresses",
            "Beds",
            "wardrobes",
            "Side Tables",
            "TV Units",
          ],
        },
        { text: "Tools & Utility", sidemenu: false },
        { text: "Work space Furniture", sidemenu: false },
        { text: "Kids Furniture", sidemenu: false },
      ],
    },
    {
      navitem: "Beauty,Toys&More",
      items: [
        { text: "Beauty & Personal Care", sidemenu: false },
        {
          text: "Men's Grooming",
          sidemenu: true,
          sidemenuItems: [
            "View All",
            "Face Washes",
            "Beard Oils",
            "Hair Styling",
            "Aftershave",
            "Face Creams & Face Pack",
          ],
        },
        { text: "Food & Drinks", sidemenu: false },
        { text: "Baby Care", sidemenu: false },
        { text: "Music", sidemenu: false },
        { text: "Stationery & Office Supplies", sidemenu: false },
        {
          text: "Books",
          sidemenu: true,
          sidemenuItems: [
            "View All",
            "Test prep",
            "Academics",
            "Fiction",
            "Non Fiction",
            "Acoustic Guitars",
          ],
        },
        {
          text: "Auto Accessories",
          sidemenu: true,
          sidemenuItems: [
            "View All",
            "Bike Essentials",
            "Car & Bike Covers",
            "Car Air Freshener",
            "Helmet",
          ],
        },
        { text: "Toys & School Supplies", sidemenu: false },
        { text: "Sports & Fitness", sidemenu: false },
      ],
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div
      className="Navitem"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="Navitem__content">
        <div className="Navitem__imageContainer">
          <img className="Navitem__image" src={props.image} />
        </div>
        <div className="Navitem__text">
          {props.text}{" "}
          {props.Dropdownmenu ? (
            <svg className="Navitem__expandMoreIcon">
              {" "}
              <ExpandMoreIcon />
            </svg>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* {open && props.Dropdownmenu && <Dropdownmenu last={props.last} />} */}
      {open && props.Dropdownmenu
        ? dropdownItems_array.map((item, index) =>
            props.text == item.navitem ? (
              <div key={index}>
                <Dropdownmenu items_array={item.items} last={props.last} />
              </div>
            ) : (
              ""
            )
          )
        : ""}
    </div>
  );
}

export default Navitem;

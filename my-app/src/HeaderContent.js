import React from "react";
import { useState } from "react";
import "./HeaderContent.css";
import Moremenu from "./Moremenu";
import plus from "./Image/flipkart_plus.png";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function HeaderContent() {
  const [open, setOpen] = useState(false);
  return (
    <div className="HeaderContent">
      <div className="HeaderContent__logoContainer">
        <div className="HeaderContent__logo">
          <img src={require("./Image/flipkart_logo.png")} />
          <span className="HeaderContent__explore">
            {" "}
            Explore <span className="HeaderContent__plus"> Plus </span>{" "}
            <img src={plus} />
          </span>
        </div>
      </div>

      <div className="HeaderContent__searchbar">
        <input
          type="search"
          placeholder="Search for products, brands and more"
        />
        <button>
          {" "}
          <svg>
            <SearchIcon />
          </svg>
        </button>
      </div>

      <div className="HeaderContent__login">
        <button>Login</button>
      </div>

      <div className="HeaderContent__becomeSeller">
        <p> Become a seller</p>
      </div>

      <div
        className="HeaderContent__more"
        onMouseLeave={() => setOpen(false)}
        onMouseEnter={() => setOpen(true)}
      >
        <div>
          <p> More </p>
          {open && <Moremenu />}
        </div>
        <svg className="ExpandMoreIcon">
          {" "}
          <ExpandMoreIcon />{" "}
        </svg>
      </div>

      <div className="HeaderContent__cart">
        <svg>
          {" "}
          <ShoppingCartIcon />{" "}
        </svg>
        <p>Cart</p>
      </div>
    </div>
  );
}

export default HeaderContent;

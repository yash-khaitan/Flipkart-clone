import React, { useState } from "react";
import "./Dropdownitem.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function Dropdownitem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="Dropdownitem__Container"
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      {props.last ? (
        <div className="Dropdownitem">
          {props.sidemenu && open && (
            <svg className="ChevronLeftIcon">
              <ChevronLeftIcon />
            </svg>
          )}
          {props.text}
        </div>
      ) : (
        <div className="Dropdownitem">
          {props.text}
          {props.sidemenu && open && (
            <svg className="ChevronRightIcon">
              <ChevronRightIcon />
            </svg>
          )}
        </div>
      )}

      {/* ///* only if the right part exist for the hovered item, show the following component */}

      {/* //   /* If open is true && sidemenu is true then show the following div */}

      {props.sidemenu && open && (
        <div
          className={
            props.last ? "Sidemenu Sidebar_transform_tranlateX-100" : "Sidemenu"
          }
        >
          <div className="Sidemenu__title"> More in {props.text} </div>
          <div className="Sidemenu__items">
            {props.sidemenuItems_array.map((sidemenuItem, index) => (
              <div key={index} className="Sidemenu__item">
                {sidemenuItem}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdownitem;

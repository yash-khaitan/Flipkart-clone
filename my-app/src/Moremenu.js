import React from "react";
import Moreitem from "./Moreitem";
import "./Moremenu.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import DownloadIcon from "@mui/icons-material/Download";

function Moremenu() {
  const items = [
    [<NotificationsIcon />, "Notification Prefences"],
    [<LiveHelpIcon />, "24x7 Customer Care"],
    [<ShowChartIcon />, "Advertise"],
    [<DownloadIcon />, "Dowload App"],
  ];

  return (
    <div className="Moremenu">
      <div className="Moremenu__list">
        {items.map((item, index) => (
          <ul key={index}>
            <Moreitem icon={item[0]} text={item[1]} />{" "}
          </ul>
          // console.log(item[0], item[1]);
        ))}
        {/* <ul>
          {" "}
          <Moreitem
            icon={<NotificationsIcon />}
            text="Notification Prefences"
          />{" "}
        </ul>
        <ul>
          {" "}
          <Moreitem icon={<LiveHelpIcon />} text="24x7 Customer Care" />{" "}
        </ul>
        <ul>
          {" "}
          <Moreitem icon={<ShowChartIcon />} text="Advertise" />{" "}
        </ul>
        <ul>
          {" "}
          <Moreitem icon={<DownloadIcon />} text="Dowload App" />{" "}
        </ul> */}
      </div>
    </div>
  );
}

export default Moremenu;

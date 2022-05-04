import React, { useState } from "react";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import "./Sidebar.css";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh<span>o</span>p
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              key={index}
              className={selected === index ? "menuItem active" : "menuItem"}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}

        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

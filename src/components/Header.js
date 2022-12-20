import React from "react";
import logoRhnet from "../assets/logoRhnet.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logoRhnet} alt="logo RHnet" />
      <NavLink className="nav-link-list basic-1" to={"/employee-list"}>
        View current employee
      </NavLink>
    </div>
  );
};

export default Header;

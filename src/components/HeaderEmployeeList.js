import React from "react";
import logoRhnet from "../assets/logoRhnet.png";
import { NavLink } from "react-router-dom";

const HeaderEmployeeList = () => {
  return (
    <div className="header">
      <img className="logo" src={logoRhnet} alt="logo RHnet" />
      <NavLink className="nav-link-list basic-1" to={"/create-employee"}>
        Create Employee
      </NavLink>
    </div>
  );
};

export default HeaderEmployeeList;

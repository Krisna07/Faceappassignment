import React from "react";
import logo from "./logo.png";

const Navbar = () => {
  return;

  <>
    <div>
      <img src={logo} className="logo" style={{ height: "60px" }} />
    </div>
    <div className="menus">
      <li>Records</li>
      <li> Add Records</li>
    </div>
  </>;
};

export default Navbar;

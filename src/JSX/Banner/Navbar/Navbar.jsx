import React from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import Login from "./Login";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <Navlinks />
      <Login />
    </div>
  );
};

export default Navbar;

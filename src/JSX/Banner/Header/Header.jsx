import React from "react";
import HeaderImg from "./HeaderImg";
import HeaderText from "./HeaderText";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <HeaderText />
      <HeaderImg />
    </div>
  );
};

export default Header;

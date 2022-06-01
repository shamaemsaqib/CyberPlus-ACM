import React from "react";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import "./footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <FooterLogo />
      <FooterLinks />
    </div>
  );
}

export default Footer;

import React from "react";
import SocialLiksImg from "./SocialLiksImg";
import Button from "../Global Components/Button";
import "./socialLinks.css";
import SocialHeaders from "./SocialHeaders";

function SocialLinks() {
  return (
    <div className="socialLinksContainer">
      <SocialHeaders />
      <SocialLiksImg />
      <Button />
    </div>
  );
}

export default SocialLinks;

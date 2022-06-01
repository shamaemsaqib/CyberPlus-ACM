import React from "react";
import img from "../../../Assets/Header-Img.png";

function HeaderImg() {
  return (
    <div className="headerImgContainer">
      <img className="headerImg" src={img} alt="" />
    </div>
  );
}

export default HeaderImg;

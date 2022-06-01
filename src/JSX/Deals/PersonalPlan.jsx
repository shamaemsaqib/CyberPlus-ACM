import React from "react";
import PlanBtn from "./PlanBtn";

function PersonalPlan() {
  return (
    <div className="singlePlanContainer">
      <div className="planDescContainer">
        <div className="planHeaderContainer">
          <h1 className="planHeader">personal</h1>
          <h3 className="planDesc">Special first packet for all</h3>
        </div>
        <div className="horizontalLine"></div>
        <h3 className="planPrice">
          <span>$8</span>/Month
        </h3>
        <ul className="planFeatures">
          <li className="singleFeature">Up to 5 page each</li>
          <li className="singleFeature">Up to 10 group page group</li>
          <li className="singleFeature">5 Days group page saved</li>
        </ul>
      </div>
      <PlanBtn />
    </div>
  );
}

export default PersonalPlan;

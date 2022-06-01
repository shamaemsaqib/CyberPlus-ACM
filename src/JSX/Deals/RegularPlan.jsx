import React from "react";
import PlanBtn from "./PlanBtn";

function RegularPlan() {
  return (
    <div className="singlePlanContainer">
      <div className="planDescContainer">
        <div className="planHeaderContainer">
          <h1 className="planHeader">regular</h1>
          <h3 className="planDesc">Recommended for personal pro</h3>
        </div>
        <div className="horizontalLine"></div>
        <h3 className="planPrice">
          <span>$20</span>/month
        </h3>
        <ul className="planFeatures">
          <li className="singleFeature">Up to 15 page each group</li>
          <li className="singleFeature">Download page up to 20 page</li>
          <li className="singleFeature">Up to 10 group page</li>
          <li className="singleFeature">15 Days group page saved</li>
        </ul>
      </div>
      <PlanBtn />
    </div>
  );
}

export default RegularPlan;

import React from "react";
import PlanBtn from "./PlanBtn";

function PremiumPlan() {
  return (
    <div className="singlePlanContainer">
      <div className="planDescContainer">
        <div className="planHeaderContainer">
          <h1 className="planHeader">premium</h1>
          <h3 className="planDesc">Packet for Startup & Company</h3>
        </div>
        <div className="horizontalLine"></div>
        <h3 className="planPrice">
          <span>$48</span>/month
        </h3>
        <ul className="planFeatures">
          <li className="singleFeature">Unlimited group pages</li>
          <li className="singleFeature">Unlimited download page</li>
          <li className="singleFeature">Unlimited page each group</li>
          <li className="singleFeature">Customize sorting group pages</li>
          <li className="singleFeature">Customize group page name</li>
          <li className="singleFeature">30 Days group page saved</li>
        </ul>
      </div>
      <PlanBtn />
    </div>
  );
}

export default PremiumPlan;

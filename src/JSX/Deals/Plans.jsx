import React from "react";
import PersonalPlan from "./PersonalPlan";
import PremiumPlan from "./PremiumPlan";
import RegularPlan from "./RegularPlan";

function Plans() {
  return (
    <div className="plansContainer">
      <PersonalPlan />
      <RegularPlan />
      <PremiumPlan />
    </div>
  );
}

export default Plans;

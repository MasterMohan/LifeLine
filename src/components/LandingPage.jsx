// src/components/LandingPage.js
import React from "react";
import ResponsiveAppBar from "./Header";
import CardRow from "./CardRow";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <ResponsiveAppBar />
      <CardRow/>
      
    </div>
  );
};

export default LandingPage;

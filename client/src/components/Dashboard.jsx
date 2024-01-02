// src/components/Dashboard.js
import React from "react";
import ResponsiveAppBar from "./Header";
import Map from "./Map"


const Dashboard = () => {
  return (
    <div className="landing-page">
      <ResponsiveAppBar />
      <Map/>
      
    </div>
  );
};

export default Dashboard;

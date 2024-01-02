// src/components/LandingPage.js
import React from "react";
import ResponsiveAppBar from "./Header";
import CardRow from "./CardRow";
import Services from "./Services";
import QualifiedDoctors from "./QualifiedDoctors";
import Footer from "./Footer";
import { Chat } from "../chat/Chat";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <ResponsiveAppBar />
      <CardRow/>
      <Services/>
      <QualifiedDoctors/>
      <Chat/>
      <Footer/>
     
      
    </div>
  );
};

export default LandingPage;

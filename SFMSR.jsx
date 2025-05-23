import React,{ useState } from "react";
import { Link, Route } from "react-router";

import './Header.css';
import './footer.css';

import ProgramCard from "./src/components/ProgramCard";
import Footer from "./src/components/footer";
import SocialMediaBar from "./src/components/SocialMediaBar";
import AIFloatingButton from "./src/components/AIFloatingButton";
import ChatAIPage from "./src/pages/ChatAIPage"; // NEW
import FeederSchool from "./src/components/FeederSchool";
import { BrowserRouter, Routes, Route } from "react-router";
import Admin from "./src/components/Admin";
import ChatAIPage from "./src/pages/ChatAIPage"; // NEW
import Header from "./src/components/Header";
import { sfmsrprogramData } from "./src/data/programData";


export default function SFMSR() {
  return (
    <>

      <Header/>
      <div className="sfmrs">
        <div className="faculty-names"><h1>Skill Faculty of Management Studies & Research</h1></div>
        <div className="section-container">
          <div className="sfet_img">
            <img className="img" src="https://svsu.ac.in/wp-content/uploads/2025/01/sfmsr-banner.png" alt=""  height={"300px"} width={"200px"}  />
          </div>
        <div className=".left-section">
            <ProgramCard programs={sfmsrprogramData}/>
        </div>
        {/* <div className="right-section">
          <FeederSchool/>
        </div> */}
      </div>
      </div> 
      <SocialMediaBar />
      <AIFloatingButton />
      <Footer />
    </>
  );
}
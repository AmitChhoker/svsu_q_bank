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
import { sfashprogramData } from "./src/data/programData";



export default function SFET() {
  return (
    <>

      <Header/>
      <div className="sfash">
        <div className="faculty-names"><h1>Skill Faculty of Applied Science & Humanities</h1></div>
        <div className="section-container">
          <div className="sfet_img">
            <img className="img" src="https://svsu.ac.in/wp-content/uploads/2025/01/sfash-banner.png" alt=""  height={"300px"} width={"200px"}  />
          </div>
          <div className=".left-section">
              <ProgramCard programs={sfashprogramData}/>
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
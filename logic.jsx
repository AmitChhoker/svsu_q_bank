
//*********************code without right div ************************ */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import './Header.css';
import './footer.css';
import ChatAIPage from "./src/pages/ChatAIPage"; // NEW
import Admin from "./src/components/Admin";
import SFET from "./SFET";
import SFASH from "./SFASH";
import SFMSR from "./SFMSR";
import SFA from "./SFA";
import LoginForm from "./src/components/LoginForm";
import FeederSchool from "./src/components/FeederSchool";


export default function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<ProgramCard/>}></Route> */}
        {/* <Route path="/Logic" element={<App/>} /> */}
        <Route path="/" element={<SFET/>} />
        <Route path="/SFASH" element={<SFASH/>}/>
        <Route path="/SFMSR" element={<SFMSR/>} />
        <Route path="/SFA" element={<SFA/>}/>
        <Route path="/chat-ai" element={<ChatAIPage />} />
        <Route path="/Admin" element={<Admin/>}></Route>
        <Route path="/LoginForm" element={<LoginForm/>}></Route>
        <Route path="/FeederSchool" element={<FeederSchool/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

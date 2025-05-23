import React from "react";
import './Header.css';
import './footer.css';

import ProgramCard from "./src/components/ProgramCard";
import Footer from "./src/components/footer";
import SocialMediaBar from "./src/components/SocialMediaBar";
import AIFloatingButton from "./src/components/AIFloatingButton";
import FeederSchool from "./src/components/FeederSchool";
import Header from "./src/components/Header";

import { sfetprogramData } from "./src/data/programData";

export default function SFASH() {
  return (
    <>
      <Header />
      <div className="sfet">
        <div className="faculty-names">
          <h1>Skill Faculty of Engineering & Technology</h1>
        </div>
        <div className="sfet_img">
          <img className="img" src="https://svsu.ac.in/wp-content/uploads/2024/11/anglebuilding.webp" alt="SFET images" height={"300px"} width={"200px"} />
        </div>
        <div className="section-container">
          <div className="left-section">
            {/* ✅ Pass the entire array */}
            <ProgramCard programs={sfetprogramData} />
          </div>
          {/* <div className="right-section">
            <FeederSchool />
          </div> */}
        </div>
      </div>
      <SocialMediaBar />
      <AIFloatingButton />
      <Footer />
    </>
  );
}



//***********prevoius code without any change ********* */
// import React,{ useState } from "react";
// import { Link, Route } from "react-router";

// import './Header.css';
// import './footer.css';

// import ProgramCard from "./src/components/ProgramCard";
// import Footer from "./src/components/footer";
// import SocialMediaBar from "./src/components/SocialMediaBar";
// import AIFloatingButton from "./src/components/AIFloatingButton";
// import ChatAIPage from "./src/pages/ChatAIPage"; // NEW
// import FeederSchool from "./src/components/FeederSchool";
// import { BrowserRouter, Routes, Route } from "react-router";
// import Admin from "./src/components/Admin";
// import ChatAIPage from "./src/pages/ChatAIPage"; // NEW
// import Header from "./src/components/Header";

// const programs = [
//   {
//     title: "B.Tech Computer Engineering (CE)",
//     semesters: [
//       {
//         name: "1st Sem",
//         years: [
//           {
//             year: "2023",
//             subjects: [
//               "Applied Physics 2023",
//               "Programming with C 2023",
//               "BEEE 2023",
//               "PC 2023",
//               "Engineering Mathematics-I 2023"
//             ]
//           },
//           {
//             year: "2024",
//             subjects: [
//               "Applied Physics 2024",
//               "Programming with C 2024",
//               "BEEE 2024",
//               "PC 2024",
//               "Engineering Mathematics-I 2024"
//             ]
//           }
//         ]
//       },
//       {
//         name: "2nd Sem",
//         years: [
//           {
//             year: "2024",
//             subjects: [
//               "Engineering Mathematics-II 2024",
//               "Digital Electronics 2024",
//               "DSA 2024",
//               "Applied Chemistry 2024",
//               "FDA 2024"
//             ]
//           }
//         ]
//       },
//       {
//         name: "3rd Sem",
//         years: [
//           {
//             year: "2025",
//             subjects: [
//               "Discrete Mathematics 2025",
//               "COA 2025",
//               "DBMS 2025",
//               "DAA 2025",
//               "AI 2025",
//               "Signal System 2025",
//             ]
//           }
//         ]
//       },
//       {
//         name: "4th Sem",
//         years: [
//           {
//             year: "2025",
//             subjects: [
//               "Operating System 2025",
//               "Oops using c++ 2025",
//               "ML 2025",
//               "Computer Networks 2025",
//               "Software Engineering 2025",
//               "Universl Human values and Ethics 2025",
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     title: "B.Tech Computer Science & Engineering(AI & ML)",
//     semesters: [
//       {
//         name: "1st Sem",
//         years: [
//           {
//             year: "2022",
//             subjects: [
//               "Applied Physics 2022",
//               "Programming with C 2022",
//               "BEEE 2022",
//               "PC 2022",
//               "Engineering Mathematics-I 2022"
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ];


// export default function SFASH() {
//   return (
//     <>

//       <Header/>
//       <div className="sfet">
//         <div className="faculty-names">
//           <h1>Skill Faculty of Engineering & Technology</h1>
//         </div>
//         <div className="section-container">
//           <div className=".left-section">
//             {programs.map((program, index) => (
//               <ProgramCard
//                 key={index}
//                 title={program.title}
//                 semesters={program.semesters}
//               />
//             ))}
//           </div>
//           <div className="right-section">
//             <FeederSchool/>
//           </div>
//         </div>  
//       </div> 
//       <SocialMediaBar />
//       <AIFloatingButton />
//       <Footer />
//     </>
//   );
// }
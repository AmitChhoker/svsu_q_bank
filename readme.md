next work:
1.make the list for all semester 
2.and writer the subjects name for all semester
3.upaload the question papers for available
4.make the header for this website


06-05-2025
1. pdf integrate   {done}
2. login and signup page integration  {bnayenge}

07-05-2025
1. Explore the new features from other website we can add on our website 
2. Backend data base find out (google drive upaload system )
3. link of google drive https://drive.google.com/drive/folders/1uz1zk_vo6R85b-N3_Y1v2TzHum08Raye
4. google drive on email id  acchhoker123@gmail.com
5. process of making link for google drive 
Link of folder 
https://drive.google.com/drive/folders/1uz1zk_vo6R85b-N3_Y1v2TzHum08Raye?usp=drive_link


link of CN pdf
https://drive.google.com/file/d/1Yz5FrQQQgdx5txQeMj74ixz-0kR09xQI/view?usp=drive_link
replace this highlited portion(1Yz5FrQQQgdx5txQeMj74ixz) with base link FILE_ID 

base link
https://drive.google.com/uc?export=view&id=FILE_ID


base link
https://drive.google.com/file/d/FILE_ID/view?usp=sharing
view?usp=sharing replce this code with {preview}


https://drive.google.com/uc?export=view&id=1Yz5FrQQQgdx5txQeMj74ixz-0kR09xQI



Note:-
1. make the lists of all the sem wise like the BSW website scrollable 

**********************08-05-2025 to 9-05-2025************************
1. adding the div left-bottom corner for all socila media icons with direct link if complete go to second (Done only links upload reamaning)
2. try to adding one more div just the right of main div for top bios 1. feeder school  2. admins div  (likh to tha per chal nhi rha tha kal fir likunga kal(09-05-2025 {done}))
3. integration of AI in right bottom with one robot icons (Done).
4. Admins page complete (done photos uploading).

next work of day
1. logo creation and{ photos uploading(done)} (done)
2. basics styling for everyone 
3. header styling (done)

***********************10-05-2025*******************
1.making the multiple pages and connect for every faculty  (bs new page bnana h then header.jsx me link me to="page ko dena h" then create the new link in app.jsx code ) 
2. All faculties Link adding (done).
3. navbar css perfection with hamburger (done)

***********************11-05-2025*******************
.9. add the classes section in classes->9th,10th,11th,12th after click on any class get, subject->all 9th classes subject after click on any subject, Year->2023,2024,2025 these years are contains the pdf of papers in this code without affect other code with update css code (done)
=>add some styling in which(done)
1. Login &signup Page making & their connection(Pending)
2. try to upaload one 9th class paper and also upaload on google drive (in feederschool.jsx me and in driveLinks me ) and try to fetch
3. Learn about database handling(Pending)

*********************12-05-2025********************
1. Changing the Formate of body of website  (Done)

*********************13-05-2025*******************
1. making the smooth flow in scrollable to (change the footer last line content from div to without div)
2. adding the photos on every page 
3. one day for collecting the papers from feeder school & library



















************************Old header.jsx code*****************
import { useState } from "react";
import { Link, Route } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "../../logic";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="main-logo">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGIbrw_M6Yn7w/profile-displayphoto-shrink_800_800/B56Za1x5tzGUAc-/0/1746806480932?e=1752105600&v=beta&t=LpaiwkXlUO6mYeMMmRCzq-nVjHFpJF6z3kDrNnu74xI"
              alt="University Logo"
              className="logo"
            />
          </div>
          <div className="title-section">
            <h1 className="university-name">
              Shree Vishwakarma Skill University, SVSU <br className="break-line" />
              Palwal, Haryana
            </h1>
            <h2 className="repo-title">प्रश्न पत्र संग्रहालय</h2>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            &#9776;
          </div>

          <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
            <ul className="nav-links">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li className="dropdown">
                <span className="faculty">Faculty</span>
                <div className="dropdown-content">
                  <ul>
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)}>SFET</Link></li>
                    <li><Link to="/SFASH" onClick={() => setIsMenuOpen(false)}>SFASH</Link></li>
                    <li><Link to="/SFMSR" onClick={() => setIsMenuOpen(false)}>SFMSR</Link></li>
                    <li><Link to="/SFA" onClick={() => setIsMenuOpen(false)}>SFA</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link to="#" onClick={() => setIsMenuOpen(false)}>Sign Up</Link></li>
              <li><Link to="#" onClick={() => setIsMenuOpen(false)}>Log In</Link></li>
            </ul>
          </nav>

          {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

        </div>
        <div className="breadcrumb">
          <a href="https://www.svsu.ac.in/" className="breadcrumb-link">SVSU-IR</a> →
          <span className="breadcrumb-current"> Shree Vishwakarma skill University</span>
        </div>
      </header>

    {/* <BrowserRouter>
      <Routes>
        <Route to="/" element={<App/>}></Route>
      </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default Header;



// import React from "react";
// import { FaBars } from "react-icons/fa";

// import "./Navigation.css";
// import logo from "../../Assets/logo/logo.png";

// export default function Navigation() {
//   return (
//     <div className="navigationsection">
//       <div className="navigation">
//         <div className="logo">
//           <img src={logo} alt="logo" />
//         </div>
//         <div className="menu">
//           <ul>
//             <li>
//               <p>Capbilities</p>
//             </li>
//             <li>
//               <p>Opportunities</p>
//             </li>
//             <li>
//               <p>FAQ</p>
//             </li>
//           </ul>
//         </div>
//         <div className="download">
//           <button>Download</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";
// import { FaBars, FaTwitter } from "react-icons/fa";
// import logo from "../../Assets/logo/logo.png";
// import "./Navigation.css";

// export default function Navigation() {
//   return (
//     <nav>
//       <div className="nav-center">
//         <div className="nav-header">
//           <img src={logo} alt="logo" />
//           <button className="nav-toggle">
//             <FaBars />
//           </button>
//         </div>
//         <div className="links-container show-container">
//           <ul className="links">
//             <li>
//               <a href="/#">home</a>
//             </li>
//             <li>
//               <a href="/#">about</a>
//             </li>
//             <li>
//               <a href="/#">contact</a>
//             </li>
//             <li>
//               <a href="/#">products</a>
//             </li>
//           </ul>
//         </div>
//         <ul className="social-icons">
//           <li>
//             <a href="https://www.google.com">
//               <FaTwitter />
//             </a>
//           </li>
//           <li>
//             <a href="https://www.google.com">
//               <FaTwitter />
//             </a>
//           </li>
//           <li>
//             <a href="https://www.google.com">
//               <FaTwitter />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import "./Navigation.css";
import logo from "../../Assets/logo/logo.png";
export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <div className="NavbarContainer">
          <div className="NavLogo">AppVentures</div>
          {/* <div className="MobileIcon">
            <FaBars />
          </div> */}
          <div className={`itemContainer ${menuOpen ? "open" : ""}`}>
            <ul className="NavMenu">
              <li className="NavItem">
                <a href="/#" className="NavLinks">
                  Home
                </a>
              </li>
              <li className="NavItem">
                <a href="/#" className="NavLinks">
                  About
                </a>
              </li>
              <li className="NavItem">
                <a href="/#" className="NavLinks">
                  Brands
                </a>
              </li>
              <li className="NavItem">
                <a href="/#" className="NavLinks">
                  Contact
                </a>
              </li>
            </ul>
            <div className="NavBtn">
              <a href="/#" className="NavBtnLink">
                Download
              </a>
            </div>
          </div>
          <div className="IconContainer">
            <div
              className={`MobileIcon hamburger ${menuOpen ? "open" : "close"}`}
              onClick={toggleMenu}
            >
              <FaBars />
            </div>
            <div
              className={`MobileIcon Close ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <FaTimes />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

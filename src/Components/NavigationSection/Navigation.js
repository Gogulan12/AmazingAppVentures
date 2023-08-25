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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav>
        <div className="NavbarContainer">
          <div className="NavLogo">
            <a href="/#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          {/* <div className="MobileIcon">
            <FaBars />
          </div> */}
          <div className={`itemContainer ${menuOpen ? "open" : ""}`}>
            <ul className="NavMenu">
              <li className="NavItem">
                <a href="/#" className="NavLinks" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li className="NavItem">
                <a href="/#about" className="NavLinks" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li className="NavItem">
                <a href="/#brand" className="NavLinks" onClick={closeMenu}>
                  Brands
                </a>
              </li>
              <li className="NavItem">
                <a href="/#contact" className="NavLinks" onClick={closeMenu}>
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

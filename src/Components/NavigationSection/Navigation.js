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
          {/* LOGO */}
          <div className="NavLogo">
            <a href="/#">
              <img src={logo} alt="logo" />
            </a>
          </div>

          {/* NAVIGATION LIST */}
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
                <a href="/#faq" className="NavLinks" onClick={closeMenu}>
                  FAQ
                </a>
              </li>
            </ul>
            <div className="NavBtn">
              <a href="/#contact" className="NavBtnLink">
                Contact Us
              </a>
            </div>
          </div>
          {/* HAMBURGER MENU */}
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

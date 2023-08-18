import React from "react";

import "./Navigation.css";
import logo from "../../Assets/logo/logo.png";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="logo">
        {/* <p>logo</p> */}
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <p>Capbilities</p>
          </li>
          <li>
            <p>Opportunities</p>
          </li>
          <li>
            <p>FAQ</p>
          </li>
        </ul>
      </div>
      <div className="download">
        <button>Download</button>
      </div>
    </div>
  );
}

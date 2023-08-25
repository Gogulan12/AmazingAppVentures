import React from "react";

import wickedhunt from "../../Assets/brands/WICKEDHUNTSLOGO.png";
import racing from "../../Assets/brands/AppMazingRace.png";
import hunt from "../../Assets/brands/AppMazingHunt.png";
import agent from "../../Assets/brands/Agent777Goldenapp.png";

import "./Brands.css";

export default function Brands() {
  return (
    <div className="BrandsectionContainer" id="brand">
      <div className="Brandsection">
        <h2>OUR IN-HOUSE BRANDS</h2>
        <div className="grid-container">
          <div className="brand grid-item">
            <div className="brandimageContainer">
              <div className="brandimage">
                <img src={wickedhunt} alt="" />
              </div>
            </div>
            <div className="brandContentContainer">
              <h3>Wicked Hunts</h3>
              <p>
                Offering venues and properties four interactive mobile games for
                team building or entertainment. These real-time games feature
                GPS tracking, chat, and customization, allowing global play and
                private previews on demand.
              </p>
            </div>
          </div>
          <div className="brand grid-item">
            <div className="brandimageContainer">
              <div className="brandimage">
                <img src={hunt} alt="" />
              </div>
            </div>
            <div className="brandContentContainer">
              <h3>AppMazing Hunt</h3>
              <p>
                Offering venues and properties four interactive mobile games for
                team building or entertainment. These real-time games feature
                GPS tracking, chat, and customization, allowing global play and
                private previews on demand.
              </p>
            </div>
          </div>
          <div className="brand grid-item">
            <div className="brandimageContainer">
              <div className="brandimage">
                <img src={racing} alt="" />
              </div>
            </div>
            <div className="brandContentContainer">
              <h3>AppMazing Race</h3>
              <p>
                Offering venues and properties four interactive mobile games for
                team building or entertainment. These real-time games feature
                GPS tracking, chat, and customization, allowing global play and
                private previews on demand.
              </p>
            </div>
          </div>
          <div className="brand grid-item">
            <div className="brandimageContainer">
              <div className="brandimage">
                <img src={agent} alt="" />
              </div>
            </div>
            <div className="brandContentContainer">
              <h3>Agent 777</h3>
              <p>
                Offering venues and properties four interactive mobile games for
                team building or entertainment. These real-time games feature
                GPS tracking, chat, and customization, allowing global play and
                private previews on demand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

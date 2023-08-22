import React from "react";
// import scaveng from "../../Assets/brands/ScavengEARTH.jpg";
// import seekqr from "../../Assets/brands/SeekQR-Icon.jpg";
// import sightseekr from "../../Assets/brands/SightSeekr-Icon1.jpg";
// import quizquest from "../../Assets/brands/QuizQuest-Icon.jpg";

import wickedhunt from "../../Assets/brands/WICKEDHUNTSLOGO.png";
import racing from "../../Assets/brands/AppMazingRace.png";
import hunt from "../../Assets/brands/AppMazingHunt.png";
import agent from "../../Assets/brands/Agent777Goldenapp.png";

import "./Brands.css";

export default function Brands() {
  return (
    <div className="Brandsection">
      <h2>OUR IN-HOUSE BRANDS</h2>
      <div className="grid-container">
        <div className="brand grid-item">
          <div className="brandimageContainer">
            <img src={wickedhunt} alt="" />
          </div>
          <div className="brandContentContainer">
            <h3>Wicked Hunts</h3>
            <p>
              Offering venues and properties four interactive mobile games for
              team building or entertainment, including ScavengEARTH, Custom
              Races, CSI-themed Investigations, and Agent 777. These real-time
              games feature GPS tracking, chat, and customization, allowing
              global play and private previews on demand.
            </p>
          </div>
        </div>
        <div className="brand grid-item">
          <div className="brandimageContainer">
            <img src={hunt} alt="" />
          </div>
          <div className="brandContentContainer">
            <h3>AppMazing Hunt</h3>
            <p>
              Offering venues and properties four interactive mobile games for
              team building or entertainment, including ScavengEARTH, Custom
              Races, CSI-themed Investigations, and Agent 777. These real-time
              games feature GPS tracking, chat, and customization, allowing
              global play and private previews on demand.
            </p>
          </div>
        </div>
        <div className="brand grid-item">
          <div className="brandimageContainer">
            <img src={racing} alt="" />
          </div>
          <div className="brandContentContainer">
            <h3>AppMazing Race</h3>
            <p>
              Offering venues and properties four interactive mobile games for
              team building or entertainment, including ScavengEARTH, Custom
              Races, CSI-themed Investigations, and Agent 777. These real-time
              games feature GPS tracking, chat, and customization, allowing
              global play and private previews on demand.
            </p>
          </div>
        </div>
        <div className="brand grid-item">
          <div className="brandimageContainer">
            <img src={agent} alt="" />
          </div>
          <div className="brandContentContainer">
            <h3>Agent 777</h3>
            <p>
              Offering venues and properties four interactive mobile games for
              team building or entertainment, including ScavengEARTH, Custom
              Races, CSI-themed Investigations, and Agent 777. These real-time
              games feature GPS tracking, chat, and customization, allowing
              global play and private previews on demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import scaveng from "../../Assets/brands/ScavengEARTH.jpg";
import seekqr from "../../Assets/brands/SeekQR-Icon.jpg";
import sightseekr from "../../Assets/brands/SightSeekr-Icon1.jpg";
import quizquest from "../../Assets/brands/QuizQuest-Icon.jpg";

import "./Brands.css";

export default function Brands() {
  return (
    <div className="Brandsection">
      <h2>Brands</h2>
      <div className="grid-container">
        <div className="brand grid-item">
          <div className="brandimageContainer">
            <img src={scaveng} alt="" />
          </div>
          <div className="brandContentContainer">
            <h3>ScavengEARTH</h3>
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
            <img src={seekqr} alt="" />
          </div>
          <div className="brandContentContainer">
            <h3>seekQR</h3>
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
            <img src={sightseekr} alt="" />
          </div>
          <div className="brandContentContainer">
            <h3>sightseekr</h3>
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
            <img src={quizquest} alt="" />
          </div>
          <div className="brandContentContainer">
            <h3>QuizQuest</h3>
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

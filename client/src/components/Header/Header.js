import React from "react";
// import { Link } from "react-router-dom";
import "../Header/Header.css";
// import WorldImg from "../../Image/WorldImg.png";

function Header() {
  return (
    <div className="section" id="headerSection">
      <div className="row">
        <div className="col s12 m6 center" id="headerImg"></div>
        <div className="col s12 m6 center" id="containerHeader">
          <h3>
            <i className="mdi-content-send" id="headerMessage">
              Connecting The World
            </i>
          </h3>
          <h5>With Out Borders!</h5>
        </div>
      </div>
    </div>
  );
}
export default Header;

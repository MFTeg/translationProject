import React from "react";
//import { Link } from "react-router-dom";
import "../Header/Header.css";
// import WorldImg from "../../Image/WorldImg.png";

function Header() {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12 center">
          <h3>
            <i className="mdi-content-send black-text">Connecting The World</i>
          </h3>
          <h5>With Out Language Barriers</h5>
        </div>
      </div>
    </div>
  );
}
export default Header;

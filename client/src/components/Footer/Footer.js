import React from "react";
// import { Link } from "react-router-dom";
import "../Header/Header.css";
import "../Footer/Footer.css";
// import WorldImg from "../../Image/WorldImg.png";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="container">
        <div className="row">
          <div className="col l4 s12">
            <h5 className="white-text">Our Vision</h5>
            <p className="white-text">Connecting the world without borders!</p>
          </div>
          <div className="col l4 s12">
            <h5 className="white-text">Blog</h5>
            <ul>
              <li>
                <a className="white-text" href="#!">
                  COMING SOON: New Features
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Cool ways to use TranslationStation
                </a>
              </li>
            </ul>
          </div>
          <div className="col l4 s12">
            <h5 className="white-text">Contact us</h5>
            <ul>
              <li>
                <a className="white-text" href="#!">
                  TranslationStation@gmail.com
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  {" "}
                  1234 Madeup Street Riverside, CA 92506
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="containerCopyRight">
          Made by{" "}
          <a className="white-text" href="http://materializecss.com">
            Mesay,Jessica,Kiana,Chris
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;

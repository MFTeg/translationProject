import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import "../Footer/Footer.css";
// import WorldImg from "../../Image/WorldImg.png";

function Footer() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="blue-text">Our Vision</h5>
            <p className="blue-text">Connecting the world without borders!</p>
          </div>
          <div className="col l3 s12">
            <h5 className="blue-text">Blog</h5>
            <ul>
              <li>
                <a classname="blue-text" href="#!">
                  COMING SOON: New Features
                </a>
              </li>
              <li>
                <a className="blue-text" href="#!">
                  Cool ways to use TranslationStation
                </a>
              </li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="blue-text">Contact us</h5>
            <ul>
              <li>
                <a className="blue-text" href="#!">
                  TranslationStation@gmail.com
                </a>
              </li>
              <li>
                <a className="blue-text" href="#!">
                  {" "}
                  1234 Madeup Street Riverside, CA 92506
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          Made by{" "}
          <a className="blue-text" href="http://materializecss.com">
            Mesay,Jessica,Kiana,Chris
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;

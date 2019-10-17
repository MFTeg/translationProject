import React from "react";
import "../OurServices/OurServices.css";
// import CoolEmogi from "../../Image/CoolEmogi.png";
// import SmileEmogi from "../../Image/SmileEmogi.png";
// import WorldImg from "../../Image/BigSmileEmogi.png";

function OurServices() {
  return (
    <div id="ourServices">
      <div className="section">
        <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text">
                <i className="material-icons big-icon"> touch_app</i>
              </h2>
              <h5 className="center">Get Started</h5>

              <p className="light">
                It is easy to get started! Simply Sign Up, invite others to join
                you and begin chatting.
              </p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text">
                <i className="material-icons big-icon">group</i>
              </h2>
              <h5 className="center">Perfect For Everyone</h5>

              <p className="light">
                This is a public app that allows you to chat directly across the
                world with some of the world's popular languages.
              </p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text">
                <i className="material-icons big-icon">insert_emoticon</i>
              </h2>
              <h5 className="center">Add Personal Touch</h5>

              <p className="light"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurServices;

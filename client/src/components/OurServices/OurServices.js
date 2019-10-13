import React from "react";
import "../OurServices/OurServices.css";
// import CoolEmogi from "../../Image/CoolEmogi.png";
// import SmileEmogi from "../../Image/SmileEmogi.png";
// import WorldImg from "../../Image/BigSmileEmogi.png";

function OurServices() {
  return (
    <div id="ourServices">
      <div class="section">
        <div class="row">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text">
                <i class="material-icons big-icon"> touch_app</i>
              </h2>
              <h5 class="center">Get Started</h5>

              <p class="light">
                It is easy to get started! Simply Sign Up, invite others to join
                you and begin chatting.
              </p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text">
                <i class="material-icons big-icon">group</i>
              </h2>
              <h5 class="center">Perfect For Everyone</h5>

              <p class="light">
                This is a public app that allows you to chat directly across the
                world with some of the world's popular languages.
              </p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text">
                <i class="material-icons big-icon">insert_emoticon</i>
              </h2>
              <h5 class="center">Add Personal Touch</h5>

              <p class="light"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurServices;

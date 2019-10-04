import React from "react";
// import { Link } from "react-router-dom";
import "../VisionStatment/Vision.css";

// import WorldImg from "../../Image/WorldImg.png";

function Vision() {
  return (
    <div className="visionContainer">
    <div className="row" id="visionRow">
      <div className="col s12 center" id="vision">
        <h3>
          <i className="mdi-content-send brown-text"></i>
        </h3>
        <h4>The only app that allows you to communicate with everyone!</h4>
        <p className="left-align light">
          <strong>
            Our mission is to make connecting with your friends and loved ones
            one step easier. No more copying and pasting your searched
            translations. We translate your messages for you! Try our instant
            messaging system that removes one less obstacle. Enjoy a private
            chatroom for custom groups, Create as many as you'd like or join as
            many as you want! Now, you can coordinate long distance
            conversations, organize your group chats, and connect with others in
            one place.
          </strong>
        </p>
      </div>
    </div>
   </div>
  );
}
export default Vision;

import React from "react";
// import { Link } from "react-router-dom";
import "../VisionStatment/Vision.css";

// import WorldImg from "../../Image/WorldImg.png";

function Vision() {
  return (
    // <div className="visionContainer">
    // <div className="section" id="visionSection">
    <div className="row" id="visionRow">
      <div className="col s12 center" id="vision">
        <h3>
          <i className="mdi-content-send brown-text"></i>
        </h3>
        <h4>The only app that allows you to talk to everyone!</h4>
        <p className="left-align light">
          <strong>
            Our mission is to make connecting with your friends and loved ones
            one step easier. No more copying and pasting your searched
            translations. We translate your messages for you! Try our instant
            messaging system that removes one less obstacle. Enjoy a private
            chatroom for custom groups. Create as many as you'd like or join as
            many as you want! Now, you can coordinate long distance
            conversations, organize your group chats, and connect with others in
            one place.
          </strong>
        </p>
        <div className="slider">
  <ul className="slides">
    <li>
      <img src="image/diverse-friends-students-shoot_53876-47012.jpg" /> 
      <div className="caption center-align">
        <h3> <i className="material-icons">people_outline</i> </h3>
        <h5 className="light grey-text text-lighten-3"> 
          <div className="center-align">
            It's easy to get started! Simply sign up, invite others to join you and begin chatting. 
          </div></h5>
      </div>
    </li>
    <li>
      <img src="image/multicultural-marketing-audiences.jpg" /> 
      <div className="caption center-align">
        <h3>   <i className="material-icons">query_builder</i> </h3>
        <h5 className="light grey-text text-lighten-3">
          <div className="center-align">
            Easier scheduling with a timezone clock as a fun feature! With world time availble, never worry about inconveniencing your chat partner! 
          </div>
        </h5>
      </div>
    </li>
    <li>
      <img src="image/compormiso-digital.jpg" /> 
      <div className="caption center-align">
        <h3><i className="material-icons">public</i></h3>
        <h5 className="light grey-text text-lighten-3">This is a public app that allows you to chat directly across the world with some of the worlds most popular languages!
        </h5>
      </div>
    </li>
  </ul>
</div>

    </div>
    // </div>
    // </div>
  );
}
export default Vision;

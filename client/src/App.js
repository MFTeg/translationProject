import React from "react";
import Signup from "./components/Signup/Signup.js";
import Signin from "./components/Signin/Signin";
import Message from "./components/Message/Message.js";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Message from "./Message";

function App() {
  return (
    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Signin" component={Signin} />
        <Route exact path="/Message" component={Message} />
      </div>
    </Router>
  );
}

export default App;

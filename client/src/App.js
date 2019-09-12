import React from "react";
import Signup from "./Signup.js";
import Signin from "./Signin.js";
import Message from "./Message.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Message from "./Message";

function App() {
  return (
    <Router>
      <div>
        {/* <NavTabs /> */}
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/SignUp" component={Signup} />
        <Route exact path="/Signin" component={Signin} />
        <Route exact path="/Message" component={Message} />
      </div>
    </Router>
  );
}

export default App;


import React from "react";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Message from "./components/Message";
import Home from "./components/Home";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Message from "./Message";

// import SignIn from './Signin'
// import SignUp from './Signup'
function App() {
  return (

    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/SignUp" component={Signup} />
        <Route exact path="/Signin" component={Signin} />
        <Route exact path="/Chat" component={Chat}/>
        <Route exact path="/Message" component={Message} />
      </div>
    </Router>
  );
}

export default App;
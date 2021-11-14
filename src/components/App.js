import React from "react";
import Context from "../context/context";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
// import Payment from "../Pages/Payment";
// import Privateroute from "./Privateroute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <Context>
            <Switch>
              <Route path="/signup" component={Signup}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/home" component={Home}></Route>
              {/* <Route path="/razorpay" component={Payment}></Route> */}
            </Switch>
          </Context>
        </Router>
      </div>
    </>
  );
}

export default App;

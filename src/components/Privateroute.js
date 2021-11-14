import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/context";

function Privateroute({ component: Component, ...rest }) {
  const { curuser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return curuser ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}

export default Privateroute;

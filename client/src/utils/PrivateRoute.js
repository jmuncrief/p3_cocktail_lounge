// NPM Packages
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useStoreContext } from "./GlobalState";

function PrivateRoute({ component: Component, ...props }) {
  const [state] = useStoreContext();
  if (state.auth) return <Route component={Component} {...props} />;
  return <Redirect to="/login" />;
}

export default PrivateRoute;
import React from "react";
import { Route, Switch } from "react-router-dom";
import MainContainer from "../containers/MainContainer";
export default function Routes() {
  return getAppropriateRoutes();
}

function getAppropriateRoutes() {
  return (
    <Switch>
      <Route path="/*">
        <MainContainer />
      </Route>
    </Switch>
  );
}

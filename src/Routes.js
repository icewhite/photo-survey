import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Main from "./routes/Main";
import Step from "./routes/Step";

export default function Component() {
  return (
    <Switch>
      <Redirect exact from="/" to="/main" />
      <Route component={Main} exact path="/main" />
      <Route component={Step} exact path="/step" />
    </Switch>
  );
}

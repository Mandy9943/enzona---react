import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Config from "../Config/Config";
import Friends from "../Friends/Friends";
import Home from "../Home/Home";
import Notification from "../Notification/Notification";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact={true} from="/" to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/notifications" component={Notification} />
      <Route path="/friends" component={Friends} />
      <Route path="/config" component={Config} />
    </Switch>
  );
};

export default Routes;

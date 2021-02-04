import React from "react";
import {
  Redirect,
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import Config from "../Config/Config";
import Friends from "../Friends/Friends";
import Home from "../Home/Home";
import Notification from "../Notification/Notification";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Rotes.css";

const Routes: React.FC<RouteComponentProps> = (props) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={props.location.key}
        timeout={500}
        classNames="animate"
      >
        <Switch>
          <Redirect exact={true} from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/notifications" component={Notification} />
          <Route path="/friends" component={Friends} />
          <Route path="/config" component={Config} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(Routes);

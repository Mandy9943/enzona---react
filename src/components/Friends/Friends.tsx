import * as React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Bar from "../Bar/Bar";
import HeaderBar from "../HeaderBar/HeaderBar";
import FriendComponent from "./FirendComponent/FriendComponent";
import "./Friends.css";
import RequestComponent from "./RequestComponent/RequestComponent";

const Friends: React.FC<{}> = () => {
  return (
    <div>
      <HeaderBar place="friend" boldText="+" boldLink="/friend-add" />
      <Bar whithoutBorderBottom={true}>
        <div className="navbar-fried">
          <NavLink to="/friends/friend" activeClassName="friend-nav-active">
            Amigos
          </NavLink>
          <NavLink to="/friends/request" activeClassName="friend-nav-active">
            Solicitudes
          </NavLink>
        </div>
      </Bar>

      <Switch>
        <Route
          exact={true}
          path="/friends/friend"
          component={FriendComponent}
        />
        <Route
          exact={true}
          path="/friends/request"
          component={RequestComponent}
        />
        <Route path="/friends/" component={FriendComponent} />
      </Switch>
    </div>
  );
};

export default Friends;

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
import "./Rotes.css";
import TransferComponent from "../HomePages/TransferPage/TransferPage";
import Navigation from "../Navigation/Navigation";
import ElectricityPage from "../HomePages/ElectricityPage/ElectricityPage";
import GiftPage from "../HomePages/GiftPage/GiftPage";
import FriendAdd from "../Friends/FriendAdd/FriendAdd";
import CardsBalance from "../HomePages/BalancePage/CardsBalance/CardsBalance";
import Balance from "../HomePages/BalancePage/Balance";
import Operations from "../HomePages/OperationsPage/Operations";
import CardsOperations from "../HomePages/OperationsPage/CardsOperations/CardsOperations";
import DonationPage from "../HomePages/DonationPage/DonationPage";

const Routes: React.FC<RouteComponentProps> = (props) => {
  return (
    <Switch>
      <Redirect exact={true} from="/" to="/home" />
      <Route path="/home">
        <Home />
        <Navigation />
      </Route>
      <Route path="/notifications">
        <Notification />
        <Navigation />
      </Route>
      <Route path="/friends">
        <Friends />
        <Navigation />
      </Route>
      <Route path="/config">
        <Config />
        <Navigation />
      </Route>
      <Route path="/transfer" component={TransferComponent} />
      <Route path="/electricity" component={ElectricityPage} />
      <Route path="/gifts" component={GiftPage} />
      <Route path="/friend-add" component={FriendAdd} />
      <Route path="/balance-cards" component={CardsBalance} />
      <Route path="/operations-cards" component={CardsOperations} />
      <Route path="/donations" component={DonationPage} />
      <Route path="/balance/:cardId" component={Balance} />
      <Route path="/operations/:cardId" component={Operations} />
    </Switch>
  );
};

export default withRouter(Routes);

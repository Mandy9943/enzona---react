import React from "react";
import HeaderBar from "../HeaderBar/HeaderBar";
import "./BankCards.css";
const BanckCards: React.FC = (props) => {
  return <div className="bank-cards">{props.children}</div>;
};

export default BanckCards;

import React from "react";
import "./SingleBankCard.css";
import { IUserBankAccount } from "../../../dataTypes";
import { Link } from "react-router-dom";

interface IProps extends IUserBankAccount {
  cardLink: string;
}

const SingleBankCard: React.FC<IProps> = (props) => {
  let card_num = props.number.toString();
  card_num = card_num.substring(12);

  return (
    <div className="single-bank-card">
      <Link to={props.cardLink + "/:" + props.id}>
        <div className="bank-name">{props.bank}</div>
        <div className="card-content">
          <div className="triangle"></div>
          <div className="number">**** **** **** {card_num}</div>
        </div>
        <div className="footer-card">
          <div className="name">{props.name}</div>
          <div className="currency">{props.currency}</div>
        </div>
      </Link>
    </div>
  );
};

export default SingleBankCard;

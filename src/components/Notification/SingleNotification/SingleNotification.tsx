import React from "react";
import { IUserNotification } from "../../../dataTypes";

const SingleNotification: React.FC<IUserNotification> = (props) => {
  return (
    <div className="single-notification">
      <div className="img-notification">
        <img src={props.image} alt="Foto de la notificación" />
      </div>
      <div className="content-single-notification">
        <div className="text-header-single-notification">
          <p>{props.notification}</p>
          <p className="price-header-single-notification">
            +{props.money_amount}
            <span className="price-currency"> {props.currency}</span>
          </p>
        </div>
        <div className="body-single-notification">
          <p>{props.name}</p>
          <p>{props.date}</p>
        </div>
        <div className="footer-single-notification">
          <div className="status-operation">{props.status}</div>
          <p>{props.hour}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleNotification;

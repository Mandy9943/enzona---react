import * as React from "react";
import Bar from "../Bar/Bar";
import HeaderBar from "../HeaderBar/HeaderBar";
import "./Notification.css";
const Notification: React.FC<{}> = () => {
  return (
    <div>
      <HeaderBar place="notification" />
      <Bar>
        <div className="bar-text wrapper">
          <p>Marcar todas como leídas</p>
        </div>
      </Bar>
      <div className="list-notifications">
        <div className="single-notification">
          <img src="" alt="" />
          <div className="header-single-notification">
            <p className="text-header-single-notification">
              Tranferencai recibida
            </p>
            <p className="price-header-single-notification"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

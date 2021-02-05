import * as React from "react";
import HeaderBar from "../HeaderBar/HeaderBar";

const Notification: React.FC<{}> = () => {
  return (
    <div>
      <HeaderBar place="notification" />
      <div className="list-notifications">notifications notifications</div>
    </div>
  );
};

export default Notification;

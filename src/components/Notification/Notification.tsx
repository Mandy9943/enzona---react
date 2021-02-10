import * as React from "react";
import Bar from "../Bar/Bar";
import HeaderBar from "../HeaderBar/HeaderBar";
import ListNotification from "../ListNotification/ListNotification";
import "./Notification.css";
import SingleNotification from "../SingleNotification/SingleNotification";
import List from "../List/List";
const Notification: React.FC = () => {
  return (
    <List>
      <HeaderBar place="Notificaciones" />
      <Bar>
        <div className="bar-text wrapper">
          <p>Marcar todas como leídas</p>
        </div>
      </Bar>
      <ListNotification>
        {" "}
        <SingleNotification
          image="dist/images/avatar2.png"
          readed={true}
          name="Armando Martin Calderon"
          money_amount={250}
          date="12/12/2021"
          currency="cup"
          status="Aceptada"
          hour="5:34 pm"
          notification="Tranferencia recibida"
        />
      </ListNotification>
    </List>
  );
};

export default Notification;

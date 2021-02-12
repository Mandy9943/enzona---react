import React from "react";
import { IUserNotification } from "../../../dataTypes";
import SingleNotification from "../../SingleNotification/SingleNotification";
import withLoader from "../../WithLoader/WithLoader";
import "./ListNotification.css";

interface IProps {
  withMarginTop?: boolean;
  notifications: IUserNotification[];
}
const ListNotification: React.FC<IProps> = (props) => {
  return (
    <React.Fragment>
      {!props.withMarginTop ? (
        <div className="list-notifications">
          <div className="list-notifications">
            {props.notifications.map((notification, i) => {
              return (
                <SingleNotification
                  key={i}
                  image={notification.image}
                  readed={notification.readed}
                  name={notification.name}
                  money_amount={notification.money_amount}
                  date={notification.date}
                  currency={notification.currency}
                  status={notification.status}
                  hour={notification.hour}
                  notification={notification.notification}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="list-notifications" style={{ marginTop: "8px" }}>
          <div className="list-notifications">
            {props.notifications.map((notification, i) => {
              return (
                <SingleNotification
                  key={i}
                  image={notification.image}
                  readed={notification.readed}
                  name={notification.name}
                  money_amount={notification.money_amount}
                  date={notification.date}
                  currency={notification.currency}
                  status={notification.status}
                  hour={notification.hour}
                  notification={notification.notification}
                />
              );
            })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default withLoader(ListNotification);

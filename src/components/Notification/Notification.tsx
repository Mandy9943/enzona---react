import * as React from "react";
import Bar from "../Bar/Bar";
import HeaderBar from "../HeaderBar/HeaderBar";
import ListNotification from "./ListNotification/ListNotification";
import "./Notification.css";
import List from "../List/List";
import { IApplicationState } from "../../Store";
import { getNotifications } from "../../actions/NotificationAction";
import { connect } from "react-redux";
import { IUserNotification } from "../../dataTypes";

interface IProps {
  notifications: IUserNotification[];
  loading: boolean;
  getNotifications: typeof getNotifications;
}

const Notification: React.FC<IProps> = (props) => {
  React.useEffect(() => {
    props.getNotifications();
  }, []);

  return (
    <List>
      <HeaderBar place="Notificaciones" />
      <Bar>
        <div className="bar-text wrapper">
          <p>Marcar todas como leídas</p>
        </div>
      </Bar>
      <ListNotification
        notifications={props.notifications}
        loading={props.loading}
      >
        {" "}
      </ListNotification>
    </List>
  );
};

const mapStateToProps = (store: IApplicationState) => {
  return {
    loading: store.notifications.loading,
    notifications: store.notifications.notifications,
  };
};

const mapDispatchToProps = (dispath: any) => {
  return {
    getNotifications: () => dispath(getNotifications()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

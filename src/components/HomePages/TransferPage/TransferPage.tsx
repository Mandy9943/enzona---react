import React from "react";
import HeaderBar from "../../HeaderBar/HeaderBar";
import ListNotification from "../../Notification/ListNotification/ListNotification";
import SingleNotification from "../../SingleNotification/SingleNotification";
import { OneOfListOPtions, OptionList } from "../../Options/Options";
import OptionsPanel from "../../OptionsPanel/OptionsPanel";
import "./TransferPage.css";
import List from "../../List/List";
import HomePage from "../HomePage";
import { IUserNotification } from "../../../dataTypes";
import { IApplicationState } from "../../../Store";
import { getNotifications } from "../../../actions/NotificationAction";
import { connect } from "react-redux";

interface IProps {
  notifications: IUserNotification[];
  loading: boolean;
  getNotifications: typeof getNotifications;
}

const TransferComponent: React.FC<IProps> = (props) => {
  React.useEffect(() => {
    props.getNotifications();
  }, []);

  return (
    <HomePage>
      <HeaderBar
        place="Transferir"
        boldText="Historial"
        boldLink="/history"
        backPath="/home"
      />
      <OptionsPanel short={true}>
        <OneOfListOPtions
          icon="icon-users"
          iconColor="var(--blue)"
          text="A un amigo"
          link=""
        />
        <OneOfListOPtions
          icon="icon-user"
          iconColor="var(--blue)"
          text="A un usuario"
          link=""
        />
        <OneOfListOPtions
          icon="icon-credit-card"
          iconColor="var(--green)"
          text="A una tarjeta"
          link=""
        />
        <OneOfListOPtions
          icon="icon-credit-card"
          iconColor="var(--blue)"
          text="A una de mis tarjetas"
          link=""
          withoutBorder={true}
        />
      </OptionsPanel>
      <OptionList text="Recientes" withoutContent={true} />
      <ListNotification
        notifications={props.notifications}
        loading={props.loading}
        withMarginTop={true}
      />
    </HomePage>
  );
};

const mapStateToProps = (store: IApplicationState) => {
  return {
    loading: store.notifications.loading,
    notifications: store.notifications.notifications,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getNotifications: () => dispatch(getNotifications()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferComponent);

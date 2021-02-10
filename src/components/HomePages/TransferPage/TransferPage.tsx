import React from "react";
import HeaderBar from "../../HeaderBar/HeaderBar";
import ListNotification from "../../ListNotification/ListNotification";
import SingleNotification from "../../SingleNotification/SingleNotification";
import { OneOfListOPtions, OptionList } from "../../Options/Options";
import OptionsPanel from "../../OptionsPanel/OptionsPanel";
import "./TransferPage.css";
import List from "../../List/List";
const TransferComponent: React.FC = () => {
  return (
    <List>
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
      <ListNotification withMarginTop={true}>
        <SingleNotification
          image="dist/images/avatar2.png"
          readed={true}
          name="Armando Martin Calderon"
          money_amount={250}
          date="12/12/2021"
          currency="usd"
          status="Aceptada"
          hour="5:34 pm"
          notification="Tranferencia recibida"
        />
        <SingleNotification
          image="dist/images/avatar2.png"
          readed={true}
          name="Armando Martin Calderon"
          money_amount={250}
          date="12/12/2021"
          currency="usd"
          status="Aceptada"
          hour="5:34 pm"
          notification="Tranferencia recibida"
        />
        <SingleNotification
          image="dist/images/avatar2.png"
          readed={true}
          name="Armando Martin Calderon"
          money_amount={250}
          date="12/12/2021"
          currency="usd"
          status="Aceptada"
          hour="5:34 pm"
          notification="Tranferencia recibida"
        />
        <SingleNotification
          image="dist/images/avatar2.png"
          readed={true}
          name="Armando Martin Calderon"
          money_amount={250}
          date="12/12/2021"
          currency="usd"
          status="Aceptada"
          hour="5:34 pm"
          notification="Tranferencia recibida"
        />
      </ListNotification>
    </List>
  );
};

export default TransferComponent;

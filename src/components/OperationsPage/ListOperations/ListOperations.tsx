import React from "react";
import ListNotification from "../../ListNotification/ListNotification";
import "./ListOperations.css";
import SingleOperation from "./SingleOpeartion/SingleOperation";

const ListOperations: React.FC = () => {
  return (
    <React.Fragment>
      <ListNotification coverFromToptoBottom={true}>
        <SingleOperation
          image="/dist/images/avatar2.png"
          money_amount={250}
          date="12/12/2021"
          currency="CUP"
          operation="Transferencia con cambio de CADECA"
          operationWay="Débito"
          marginTop="-55px"
        />
        <SingleOperation
          image="/dist/images/avatar2.png"
          money_amount={250}
          date="12/12/2021"
          currency="CUP"
          operation="Extracción"
          operationWay="Débito"
          marginTop="-55px"
        />
      </ListNotification>
    </React.Fragment>
  );
};

export default ListOperations;

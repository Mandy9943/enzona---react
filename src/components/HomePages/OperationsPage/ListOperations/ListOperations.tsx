import React from "react";
import HomePage from "../../HomePage";
import "./ListOperations.css";
import SingleOperation from "./SingleOpeartion/SingleOperation";

const ListOperations: React.FC = () => {
  return (
    <React.Fragment>
      <HomePage>
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
      </HomePage>
    </React.Fragment>
  );
};

export default ListOperations;

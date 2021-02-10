import React from "react";
import HeaderBar from "../../HeaderBar/HeaderBar";
import ListOperations from "./ListOperations/ListOperations";
import "./Operations.css";
const Operations: React.FC = () => {
  return (
    <div className="operations">
      <HeaderBar place="Operaciones" backPath="/operations-cards" />

      <ListOperations />
    </div>
  );
};

export default Operations;

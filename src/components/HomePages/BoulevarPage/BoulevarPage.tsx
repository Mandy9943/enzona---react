import React from "react";
import HeaderBar from "../../HeaderBar/HeaderBar";
import HomePage from "../HomePage";

const BoulevarPage: React.FC = () => {
  return (
    <HomePage>
      <HeaderBar place="Bulevar" backPath="/home" />
    </HomePage>
  );
};

export default BoulevarPage;

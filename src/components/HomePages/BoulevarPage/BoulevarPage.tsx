import React from "react";
import HeaderBar from "../../HeaderBar/HeaderBar";
import HomePage from "../HomePage";
import MarketsList from "./MarketsList/MarketsList";

const BoulevarPage: React.FC = () => {
  return (
    <HomePage>
      <HeaderBar place="Bulevar" backPath="/home" />
      <MarketsList />
    </HomePage>
  );
};

export default BoulevarPage;

import React from "react";
import "./MarketsList.css";
import SingleMarket from "./SingleMarket/SingleMarket";
const MarketsList: React.FC = () => {
  return (
    <div className="market-list">
      <SingleMarket />
      <SingleMarket />
      <SingleMarket />
      <SingleMarket />
      <SingleMarket />
      <SingleMarket />
    </div>
  );
};

export default MarketsList;

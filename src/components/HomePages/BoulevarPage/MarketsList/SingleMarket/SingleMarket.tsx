import React from "react";
import "./SingleMarket.css";

/* interface IProps{
    imgLogo: string;
    name: string;
    provinece: string;

} */

const SingleMarket: React.FC = () => {
  return (
    <div className="single-market">
      <div
        className="logo-market"
        style={{
          backgroundImage: "url(/dist/images/logo-market.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="market-content">
        <div className="market-name">Lavasca Artesanias</div>
        <div className="market-address low-text-market">Holguien, Holguin</div>
        <div className="amount-of-products low-text-market">
          Productos : 105
        </div>
      </div>
    </div>
  );
};

export default SingleMarket;

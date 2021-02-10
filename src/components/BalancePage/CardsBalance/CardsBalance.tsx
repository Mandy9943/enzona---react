import React from "react";
import BanckCards from "../../BankCards/BanckCards";
import SingleBankCard from "../../BankCards/SingleBankCard/SingleBankCard";
import HeaderBar from "../../HeaderBar/HeaderBar";

const CardsBalance: React.FC = () => {
  return (
    <div className="wrapper">
      <HeaderBar place="Tarjetas de banco" backPath="/home" />
      <BanckCards>
        <SingleBankCard
          id={451515}
          bank="Banco Metropolitano"
          name="Armando Cesar Martin Calderon"
          currency="CUP"
          number={9894455652124849}
          active={false}
          cardLink="balance"
        />
        <SingleBankCard
          id={232156}
          bank="Banco Metropolitano"
          name="Armando"
          currency="USD"
          number={9894455652124578}
          active={false}
          cardLink="balance"
        />
      </BanckCards>
    </div>
  );
};

export default CardsBalance;

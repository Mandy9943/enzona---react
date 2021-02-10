import React from "react";
import BanckCards from "../../BankCards/BanckCards";
import SingleBankCard from "../../BankCards/SingleBankCard/SingleBankCard";
import HeaderBar from "../../HeaderBar/HeaderBar";

const CardsOperations: React.FC = () => {
  return (
    <div>
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
            cardLink="operations"
          />
          <SingleBankCard
            id={232156}
            bank="Banco Metropolitano"
            name="Armando"
            currency="USD"
            number={9894455652124578}
            active={false}
            cardLink="operations"
          />
        </BanckCards>
      </div>
    </div>
  );
};

export default CardsOperations;

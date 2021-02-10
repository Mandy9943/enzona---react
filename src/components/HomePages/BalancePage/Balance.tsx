import React from "react";
import HeaderBar from "../../HeaderBar/HeaderBar";
import { OneOfListOPtions, OptionList } from "../../Options/Options";
import OptionsPanel from "../../OptionsPanel/OptionsPanel";
import HomePage from "../HomePage";
import "./Balance.css";
const Balance: React.FC = () => {
  return (
    <HomePage>
      <HeaderBar place="Saldo" backPath="/balance-cards" />
      <div className="balance-header">
        <div className="balance-number">
          <div className="amount">
            2150.59 <span className="balance-currency">CUP</span>
          </div>

          <div className="balance-caption">Saldo disponible</div>
        </div>
        <div className="balance-header-bottom">
          <p>Saldo contable</p>
          <div className="amount">
            2150.59 <span className="balance-currency">CUP</span>
          </div>
        </div>
      </div>
      <OptionsPanel>
        <OneOfListOPtions
          text="Tarjeta"
          noIconType={true}
          textLeft="BANMET 6349"
          marginTop="-20px"
        />
        <OneOfListOPtions
          text="Cuenta"
          noIconType={true}
          textLeft="40987XXXXXX027"
          withoutBorder={true}
        />
      </OptionsPanel>
      <OptionList
        icon="icon-list_alt"
        iconColor="var(--orange)"
        text="Operaciones"
        link="/operations/4216"
      ></OptionList>
    </HomePage>
  );
};

export default Balance;

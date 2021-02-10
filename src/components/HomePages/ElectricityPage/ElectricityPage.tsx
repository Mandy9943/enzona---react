import React from "react";
import HeaderBar from "../../HeaderBar/HeaderBar";
import { OneOfListOPtions, OptionList } from "../../Options/Options";
import OptionsPanel from "../../OptionsPanel/OptionsPanel";
import List from "../../List/List";
const ElectricityPage: React.FC = () => {
  return (
    <div>
      <List>
        <HeaderBar
          place="Electricidad"
          backPath="/home"
          boldText="Historial"
          boldLink="/electicyti-history"
        />

        <OptionsPanel short={true}>
          <OneOfListOPtions
            icon="icon-users"
            iconColor="var(--blue)"
            text="Pagar factura"
            link=""
          ></OneOfListOPtions>
          <OneOfListOPtions
            icon="icon-users"
            iconColor="var(--blue)"
            text="Mis ID cliente"
            link=""
            withoutBorder={true}
          ></OneOfListOPtions>
        </OptionsPanel>
        <OptionList text="Mis Facturas a Pagar" withoutContent={true} />
      </List>
    </div>
  );
};

export default ElectricityPage;

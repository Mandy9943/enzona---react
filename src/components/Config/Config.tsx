import * as React from "react";
import { OneOfListOPtions, OptionList } from "../Options/Options";
import OptionsPanel from "../OptionsPanel/OptionsPanel";
import PanelHeader from "../PanelHeader/PanelHeader";
import "./Config.css";
const Config: React.FC<{}> = () => {
  return (
    <div>
      <PanelHeader place="config" />
      <OptionsPanel>
        <OneOfListOPtions
          icon="icon-list_alt"
          iconColor="var(--orange)"
          text="Transaciones"
          link=""
        />
        <OneOfListOPtions
          icon="icon-credit-card1"
          iconColor="var(--green)"
          text="Tarjetas de Banco"
          link=""
        />
        <OneOfListOPtions
          icon="icon-qr_code"
          iconColor="var(--blue)"
          text="Mi código QR"
          link=""
          withoutBorder={true}
        />
      </OptionsPanel>
      <OptionList
        icon="icon-settings"
        iconColor="var(--blue)"
        text="Configuración"
        link=""
      />
      <OptionList
        icon="icon-switch"
        iconColor="var(--red)"
        text="Cerrar sesión"
        link=""
      />
    </div>
  );
};

export default Config;

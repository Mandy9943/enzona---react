import React from "react";
import HeaderBar from "../../HeaderBar/HeaderBar";
import List from "../../List/List";
import { OneOfListOPtions } from "../../Options/Options";
import OptionsPanel from "../../OptionsPanel/OptionsPanel";

const FriendAdd: React.FC = () => {
  return (
    <List>
      <HeaderBar backPath="/friends/friend" place="Agreagar amigo" />
      <OptionsPanel short={true}>
        <OneOfListOPtions
          icon="icon-qr_code_scanner"
          iconColor="var(--blue)"
          text="Escanear QR"
          link=""
        />
        <OneOfListOPtions
          icon="icon-qr_code"
          iconColor="var(--blue)"
          text="Mi código QR"
          link=""
        />
        <OneOfListOPtions
          icon="icon-user"
          iconColor="var(--blue)"
          text="Añadir un usuario"
          link=""
          withoutBorder={true}
        />
      </OptionsPanel>
    </List>
  );
};

export default FriendAdd;

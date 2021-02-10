import React from "react";
import HeaderBar from "../../HeaderBar/HeaderBar";
import List from "../../List/List";
import { OneOfListOPtions, OptionList } from "../../Options/Options";
import OptionsPanel from "../../OptionsPanel/OptionsPanel";

const GiftPage: React.FC = () => {
  return (
    <List>
      <HeaderBar
        boldText="Historial"
        boldLink="/gitf-history"
        backPath="/home"
        place="Regalos"
      />
      <OptionsPanel short={true}>
        <OneOfListOPtions
          icon="icon-credit-card"
          iconColor="var(--red)"
          text="A un amigo"
          link=""
        />
        <OneOfListOPtions
          icon="icon-user"
          iconColor="var(--blue)"
          text="A un usuario"
          link=""
          withoutBorder={true}
        />
      </OptionsPanel>
      <OptionList text="Recientes" withoutContent={true} />
    </List>
  );
};

export default GiftPage;

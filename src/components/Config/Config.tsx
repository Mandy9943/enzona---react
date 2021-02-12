import * as React from "react";
import { OneOfListOPtions, OptionList } from "../Options/Options";
import OptionsPanel from "../OptionsPanel/OptionsPanel";
import PanelHeader from "../PanelHeader/PanelHeader";
import "./Config.css";
import { getUserInfo } from "../../actions/UserInfoAction";
import { IUserInfo } from "../../dataTypes";
import { IApplicationState } from "../../Store";
import { connect } from "react-redux";
import PanelHeaderConfig from "./PanelHeaderConfig/PanelHeaderConfig";
interface IProps {
  getUserInfo: typeof getUserInfo;
  loading: boolean;
  userInfo: IUserInfo;
}

const Config: React.FC<IProps> = (props) => {
  React.useEffect(() => {
    props.getUserInfo();
  }, []); // eslint-disable-next-line
  return (
    <div>
      <PanelHeader>
        <PanelHeaderConfig loading={props.loading} userInfo={props.userInfo} />
      </PanelHeader>
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

const mapStateToProps = (sotre: IApplicationState) => {
  return {
    loading: sotre.userInfo.loading,
    userInfo: sotre.userInfo.user_info,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUserInfo: () => dispatch(getUserInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Config);

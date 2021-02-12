import React from "react";
import { Link } from "react-router-dom";
import { IUserInfo } from "../../../dataTypes";
import withLoader from "../../WithLoader/WithLoader";
import "./PanelHeaderConfig.css";
interface IProps {
  userInfo: IUserInfo;
}
const PanelHeaderConfig: React.FC<IProps> = (props) => {
  return (
    <div className="panel-header-content wrapper">
      <div className="panel-header-person">Yo</div>
      <Link to="">
        <div className="panel-header-perfil">
          <div className="panel-header-user-image">
            <img src={props.userInfo.img} alt="Foto de usuario" />
            <div className="user-error text-center">
              <i className="icon-cross "></i>
            </div>
          </div>
          <div className="panel-header-user-general-info">
            <div className="fullname">{props.userInfo.fullname}</div>
            <div className="username">{props.userInfo.username}</div>
            <div className="tel">{props.userInfo.phone}</div>
            <div className="more-info">
              <i className="icon-angle-right"></i>{" "}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default withLoader(PanelHeaderConfig);

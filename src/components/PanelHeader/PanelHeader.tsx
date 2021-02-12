import * as React from "react";
import { Link } from "react-router-dom";
import { IUserInfo } from "../../dataTypes";
import withLoader from "../WithLoader/WithLoader";
import "./PanelHeader.css";

const PanelHeader: React.FC = (props) => {
  return (
    <div className="panel-header">
      <div className="panel-header-shadow wrapper">{props.children}</div>
    </div>
  );
};

export default PanelHeader;

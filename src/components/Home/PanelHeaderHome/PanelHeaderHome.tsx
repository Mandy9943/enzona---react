import React from "react";
import { Link } from "react-router-dom";
import PanelHeader from "../../PanelHeader/PanelHeader";
import "./PanelHeaderHome.css";

const PanelHeaderHome: React.FC = () => {
  return (
    <PanelHeader>
      <ul className="panel-header-list">
        <li className="panel-header-list-item">
          <Link to="">
            <i className=" icon-qr_code_scanner"></i>
            <div className="header-panel-item-caption text-center">
              Escanear
            </div>
          </Link>
        </li>

        <li className="panel-header-list-item">
          <Link to="">
            <i className="icon-banknote"></i>
            <div className="header-panel-item-caption text-center">Recibir</div>
          </Link>
        </li>
      </ul>
    </PanelHeader>
  );
};

export default PanelHeaderHome;

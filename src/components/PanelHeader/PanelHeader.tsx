import * as React from "react";
import { Link } from "react-router-dom";
import "./PanelHeader.css";
interface IProps {
  place: "home" | "config";
}

const PanelHeader: React.FC<IProps> = ({ place }) => {
  return (
    <div className="panel-header">
      <div className="panel-header-shadow wrapper">
        {place === "home" ? (
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
                <div className="header-panel-item-caption text-center">
                  Recibir
                </div>
              </Link>
            </li>
          </ul>
        ) : (
          <div className="panel-header-content wrapper">
            <div className="panel-header-person">Yo</div>
            <div className="panel-header-perfil">
              <div className="panel-header-user-image">
                <img src="dist/images/avatar1.png" alt="Foto de usuario" />
                <div className="user-error text-center">
                  <i className="icon-cross "></i>
                </div>
              </div>
              <div className="panel-header-user-general-info">
                <div className="fullname">Armando Martin Calderon</div>
                <div className="username">acalderon135</div>
                <div className="tel">54233256</div>
                <div className="more-info">
                  <Link to="">
                    <i className="icon-angle-right"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PanelHeader;

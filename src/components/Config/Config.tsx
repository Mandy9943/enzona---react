import * as React from "react";
import { Link } from "react-router-dom";
import PanelHeader from "../PanelHeader/PanelHeader";
import "./Config.css";
const Config: React.FC<{}> = () => {
  return (
    <div>
      <PanelHeader place="config" />
      <div className="config-options">
        <div className="firsts-options">
          <div className="first-option">
            <Link to="">
              <div className="option-content">
                <i
                  className="icon-list_alt f-i"
                  style={{ color: "var(--orange)" }}
                ></i>
                <div className="option-text">
                  <p>Transaciones</p>
                  <i className="icon-angle-right s-i"></i>
                </div>
              </div>
            </Link>
          </div>
          <div className="first-option">
            <Link to="">
              <div className="option-content">
                <i
                  className="icon-credit-card1 f-i"
                  style={{ color: "var(--green)" }}
                ></i>
                <div className="option-text">
                  <p>Tarjetas de banco</p>

                  <i className="icon-angle-right s-i"></i>
                </div>
              </div>
            </Link>
          </div>
          <div className="first-option">
            <Link to="">
              <div className="option-content">
                <i
                  className="icon-qr_code f-i"
                  style={{ color: "var(--blue)" }}
                ></i>
                <div className="option-text" style={{ border: "none" }}>
                  <p>Mi código QR</p>
                  <i className="icon-angle-right s-i"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="option">
          <Link to="">
            <div className="option-content">
              <i
                className="icon-settings f-i"
                style={{ color: "var(--blue)" }}
              ></i>
              <div className="option-text">
                <p>Configuración</p>

                <i className="icon-angle-right s-i"></i>
              </div>
            </div>
          </Link>
        </div>
        <div className="option">
          <Link to="">
            <div className="option-content">
              <i
                className="icon-switch f-i"
                style={{ color: "var(--red)" }}
              ></i>
              <div className="option-text">
                <p>Cerrar sesión</p>

                <i className="icon-angle-right s-i"></i>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Config;

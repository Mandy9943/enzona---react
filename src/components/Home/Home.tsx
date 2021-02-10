import * as React from "react";
import { Link } from "react-router-dom";
import PanelHeader from "../PanelHeader/PanelHeader";
import "./Home.css";

const Home: React.FC<{}> = () => {
  return (
    <div className="home-panel wrapper">
      <PanelHeader place="home" />
      <div className="panel-body">
        <ul className="panel-body-list">
          <li className="panel-body-list-item">
            <Link to="/transfer">
              <img
                src="dist/images/transferir_min.png"
                alt="Foto de tranferir dinero mediante tarjetas"
              />
            </Link>
            <div className="caption">Transferir</div>
          </li>
          <li className="panel-body-list-item">
            <Link to="/balance-cards">
              <img
                src="dist/images/saldo.png"
                alt="Foto de tranferir dinero mediante tarjetas"
              />
            </Link>
            <div className="caption">Saldo</div>
          </li>
          <li className="panel-body-list-item">
            <Link to="/operations-cards">
              <img
                src="dist/images/operacioens.png"
                alt="Foto de tranferir dinero mediante tarjetas"
              />
            </Link>
            <div className="caption">Operaciones</div>
          </li>
          <li className="panel-body-list-item">
            <Link to="">
              <img
                src="dist/images/transferir_min.png"
                alt="Foto de tranferir dinero mediante tarjetas"
              />
            </Link>
            <div className="caption">Solicitar Tarjetas</div>
          </li>
          <li className="panel-body-list-item">
            <Link to="/gifts">
              <img
                src="dist/images/regalos.png"
                alt="Foto de tranferir dinero mediante tarjetas"
              />
            </Link>
            <div className="caption">Regalos</div>
          </li>
          <li className="panel-body-list-item">
            <Link to="/donations">
              <img
                src="dist/images/donar_3.png"
                alt="Foto de tranferir dinero mediante tarjetas"
              />
            </Link>
            <div className="caption">Donar</div>
          </li>
          <li className="panel-body-list-item">
            <Link to="/electricity">
              <img
                src="dist/images/electricidad_1.png"
                alt="Foto de tranferir dinero mediante tarjetas"
              />
            </Link>
            <div className="caption">Electricidad</div>
          </li>
          <li className="panel-body-list-item">
            <Link to="/electricity">
              <img
                src="dist/images/transferir_min.png"
                alt="Foto de tranferir dinero mediante tarjetas"
              />
            </Link>
            <div className="caption">Bulevar</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

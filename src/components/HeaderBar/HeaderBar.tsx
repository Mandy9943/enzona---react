import * as React from "react";
import "./HeaderBar.css";

interface IProps {
  place: "notification" | "friend";
}

const HeaderBar: React.FC<IProps> = ({ place }) => {
  return (
    <div className="header-bar">
      {place === "notification" ? <p>Notificaicones</p> : <p>Mis amigos</p>}
    </div>
  );
};

export default HeaderBar;

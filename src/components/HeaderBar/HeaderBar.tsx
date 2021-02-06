import * as React from "react";
import "./HeaderBar.css";

interface IProps {
  place: string;
}

const HeaderBar: React.FC<IProps> = ({ place }) => {
  return <div className="header-bar">{place}</div>;
};

export default HeaderBar;

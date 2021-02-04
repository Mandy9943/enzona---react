import * as React from "react";
import Navigation from "../Navigation/Navigation";
import "./Layout.css";
const Layouts: React.FC<{}> = (props) => {
  return (
    <div className="page-father">
      <div className="content-page">
        {props.children}
        <Navigation />
      </div>
    </div>
  );
};

export default Layouts;

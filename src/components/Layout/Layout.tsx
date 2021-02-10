import * as React from "react";
import "./Layout.css";
const Layouts: React.FC<{}> = (props) => {
  return (
    <div className="page-father">
      <div className="content-page">{props.children}</div>
    </div>
  );
};

export default Layouts;

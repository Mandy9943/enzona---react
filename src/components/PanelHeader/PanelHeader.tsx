import * as React from "react";

import "./PanelHeader.css";

const PanelHeader: React.FC = (props) => {
  return (
    <div className="panel-header">
      <div className="panel-header-shadow wrapper">{props.children}</div>
    </div>
  );
};

export default PanelHeader;

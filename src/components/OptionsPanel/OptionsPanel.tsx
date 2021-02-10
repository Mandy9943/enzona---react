import React from "react";
import "./OptionsPanel.css";
interface IProps {
  short?: boolean;
}
const OptionsPanel: React.FC<IProps> = (props) => {
  return (
    <React.Fragment>
      {props.short ? (
        <div className="firsts-options" style={{ marginTop: "-100px" }}>
          {props.children}
        </div>
      ) : (
        <div className="firsts-options">{props.children}</div>
      )}
    </React.Fragment>
  );
};

export default OptionsPanel;

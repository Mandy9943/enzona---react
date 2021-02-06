import React from "react";
import { Link } from "react-router-dom";
import "./Options.css";

interface IOneofListOPtions {
  icon: string;
  iconColor: string;
  text: string;
  link: string;
  withoutBorder?: boolean;
}

export const OneOfListOPtions: React.FC<IOneofListOPtions> = (props) => {
  return (
    <div className="single-option">
      <Link to={props.link}>
        <div className="option-content">
          <i
            className={`${props.icon} f-i`}
            style={{ color: `${props.iconColor}` }}
          ></i>
          <div
            className="option-text"
            style={props.withoutBorder ? { border: "none" } : {}}
          >
            <p>{props.text}</p>
            <i className="icon-angle-right s-i"></i>
          </div>
        </div>
      </Link>
    </div>
  );
};

interface IOption {
  icon: string;
  iconColor: string;
  text: string;
  link: string;
}

export const OptionList: React.FC<IOption> = (props) => {
  return (
    <div className="option">
      <Link to={props.link}>
        <div className="option-content">
          <i
            className={`${props.icon} f-i`}
            style={{ color: props.iconColor }}
          ></i>
          <div className="option-text">
            <p>{props.text}</p>

            <i className="icon-angle-right s-i"></i>
          </div>
        </div>
      </Link>
    </div>
  );
};

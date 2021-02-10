import React from "react";
import { Link } from "react-router-dom";
import "./Options.css";

interface IOneofListOPtions {
  icon?: string;
  iconColor?: string;
  text: string;
  link?: string;
  withoutBorder?: boolean;
  noIconType?: boolean;
  textLeft?: string;
  marginTop?: string;
}

export const OneOfListOPtions: React.FC<IOneofListOPtions> = (props) => {
  return (
    <React.Fragment>
      {!props.noIconType ? (
        <div className="single-option">
          <Link to={props.link ? props.link : ""}>
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
      ) : (
        <div
          className="single-option"
          style={{ marginTop: props.marginTop ? props.marginTop : "" }}
        >
          <div className="option-content">
            <div
              className="option-text"
              style={
                props.withoutBorder
                  ? { border: "none", paddingRight: "12px" }
                  : { paddingRight: "12px" }
              }
            >
              <p style={{ flex: "50%" }}>{props.text}</p>
              <div className="caption-option">{props.textLeft}</div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

interface IOption {
  icon?: string;
  iconColor?: string;
  text: string;
  link?: string;
  withoutContent?: boolean;
}

export const OptionList: React.FC<IOption> = (props) => {
  return (
    <div className="option">
      {props.withoutContent ? (
        <div className="option-without-content">
          <p>{props.text}</p>
        </div>
      ) : (
        <Link to={props.link ? props.link : ""}>
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
      )}
    </div>
  );
};

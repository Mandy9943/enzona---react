import React from "react";
import "./ListNotification.css";

interface IProps {
  withMarginTop?: boolean;
  coverFromToptoBottom?: boolean;
}
const ListNotification: React.FC<IProps> = (props) => {
  return (
    <React.Fragment>
      {!props.coverFromToptoBottom ? (
        <React.Fragment>
          {!props.withMarginTop ? (
            <div className="list-notifications">{props.children}</div>
          ) : (
            <div className="list-notifications" style={{ marginTop: "8px" }}>
              {props.children}
            </div>
          )}
        </React.Fragment>
      ) : (
        <div
          className="list-notifications"
          style={{ position: "absolute", top: "0", paddingTop: "45px" }}
        >
          {props.children}
        </div>
      )}
    </React.Fragment>
  );
};

export default ListNotification;

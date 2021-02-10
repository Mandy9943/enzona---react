import * as React from "react";
import "./HeaderBar.css";
import { Link } from "react-router-dom";

interface IProps {
  place?: string;
  boldText?: string;
  boldLink?: string;
  backPath?: string;
}

const HeaderBar: React.FC<IProps> = ({
  place,
  boldText,
  boldLink,
  backPath,
}) => {
  return (
    <React.Fragment>
      {place ? (
        <div className="header-bar">
          {backPath && (
            <div className="go-back">
              <Link to={backPath}>
                <i className="icon-angle-left"></i>
              </Link>
            </div>
          )}

          <div className="header-bar-content">
            <div className="title">{place}</div>
            {boldLink && (
              <Link to={boldLink}>
                <div className="boldText">{boldText}</div>
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div className="header-bar transparent">
          {backPath && (
            <div className="go-back">
              <Link to={backPath}>
                <i className="icon-angle-left"></i>
              </Link>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default HeaderBar;

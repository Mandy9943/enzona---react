import React from "react";
import "./List.css";

const List: React.FC = (props) => {
  return <div className="list">{props.children}</div>;
};

export default List;

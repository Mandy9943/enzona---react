import * as React from "react";
import "./Bar.css";

interface IProps {
  whithoutBorderBottom?: boolean;
}
const Bar: React.FC<IProps> = (props) => {
  const barClass: string[] = ["bar"];
  if (!props.whithoutBorderBottom) {
    barClass.push("boder-bottom");
  }
  return <div className={barClass.join(" ")}>{props.children}</div>;
};

export default Bar;

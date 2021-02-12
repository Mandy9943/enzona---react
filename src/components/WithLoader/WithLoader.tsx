import React from "react";
import "./WithLoader.css";
interface IProps {
  loading: boolean;
}
const withLoader = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & IProps> => ({ loading, ...props }: IProps) =>
  loading ? (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <Component {...(props as P)} />
  );
export default withLoader;

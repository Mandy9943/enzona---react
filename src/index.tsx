import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Store } from "redux";
import { Provider } from "react-redux";
import configureStore, { IApplicationState } from "./Store";

interface IProps {
  sotre: Store<IApplicationState>;
}

const Root: React.FC<IProps> = (props) => {
  return (
    <Provider store={props.sotre}>
      <App />
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root sotre={configureStore()} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

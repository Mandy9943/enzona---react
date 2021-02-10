import React from "react";
import "./HomePage.css";
const HomePage: React.FC = (props) => {
  return <div className="home-page">{props.children}</div>;
};

export default HomePage;

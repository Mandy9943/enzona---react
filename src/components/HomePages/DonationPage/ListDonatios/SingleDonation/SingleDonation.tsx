import React from "react";
import { Link } from "react-router-dom";
import "./SingleDonation.css";

interface IProps {
  name: string;
  date: string;
  idDonation: number;
}

const SingleDonation: React.FC<IProps> = (props) => {
  return (
    <Link to={`donation-give/${props.idDonation}`}>
      <div className="single-donation">
        <div className="donation-content">
          <div className="donation-name">{props.name}</div>
          <div className="donation-date">{props.date}</div>
        </div>
        <i className="icon-angle-right"></i>
      </div>
    </Link>
  );
};

export default SingleDonation;

import React from "react";
import "./SingleOperation.css";
import { currency_type, operation_way_type } from "../../../../dataTypes";
interface IProps {
  image: string;
  operation: string;
  money_amount: number;
  currency: currency_type;
  operationWay: operation_way_type;
  marginTop?: string;
  date: string;
}

const SingleOperation: React.FC<IProps> = (props) => {
  return (
    <div
      className="single-operation"
      style={{ paddingTop: props.marginTop ? props.marginTop : "" }}
    >
      <div className="img-operation">
        <img src={props.image} alt="Foto de la operacion" />
      </div>
      <div className="content-single-operation">
        <div className="text-header-single-operation">
          <p className="operation">{props.operation}</p>
          <p className="price-header-single-operation">
            +{props.money_amount}
            <span className="price-currency"> {props.currency}</span>
          </p>
        </div>
        <div className="body-single-operation">
          <p>{props.operationWay}</p>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleOperation;

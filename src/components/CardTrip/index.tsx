import React from "react";

//styles
import "./styles.css";

//components
import Button from "../Button";

export default function CardTrip(props: {
  bgColor: string;
  bgColorLine: string;
  bgGradient: string;
  colorFont: string;
  border: string;
  title: string;
  subTitle: string;
  width: string;
}) {
  return (
    <div className="card-trip" style={{ backgroundImage: props.bgGradient }}>
      <div className="content" style={{ color: props.colorFont }}>
        <p className="default-text">
          <div style={{ backgroundColor: props.bgColorLine }}></div>Viagens
          nacionais
        </p>
        <h3 className="title-card" style={{ width: props.width }}>
          {props.title}
        </h3>
        <p className="sub-title">{props.subTitle}</p>
        <Button
          textButton="agendar"
          bgColor={props.bgColor}
          colorFont={props.colorFont}
          border={props.border}
        />
      </div>
    </div>
  );
}

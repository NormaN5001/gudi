import React from "react";

//styles
import "./styles.css";

//images
import RJImg from "../../../assets/rj.png";
import RioOstrasImg from "../../../assets/rio-ostra.png";
import CNImg from "../../../assets/cn.png";
import AMImg from "../../../assets/am.png";

//images
import Button from "../../Button";

export default function PlacesTrip() {
  return (
    <div className="content-placestrip">
      <div className="card-image">
        <img
          className="image-city"
          src={RJImg}
          alt="Imagem do lugar da viagem"
        />
        <div className="div-button">
          <Button
            bgColor="rgba(0, 0, 0, 0.3)"
            textButton="Rio de Janeiro"
            border="solid white 1px"
            colorFont=""
          />
        </div>
      </div>

      <div className="card-image">
        <img
          className="image-city"
          src={RioOstrasImg}
          alt="Imagem do lugar da viagem"
        />
        <div className="div-button">
          <Button
            bgColor="rgba(0, 0, 0, 0.3)"
            textButton="Rio das Ostras"
            border="solid white 1px"
            colorFont=""
          />
        </div>
      </div>

      <div className="card-image">
        <img
          className="image-city"
          src={CNImg}
          alt="Imagem do lugar da viagem"
        />
        <div className="div-button">
          <Button
            bgColor="rgba(0, 0, 0, 0.3)"
            textButton="Caldas Novas"
            border="solid white 1px"
            colorFont=""
          />
        </div>
      </div>

      <div className="card-image">
        <img
          className="image-city"
          src={AMImg}
          alt="Imagem do lugar da viagem"
        />
        <div className="div-button">
          <Button
            bgColor="rgba(0, 0, 0, 0.3)"
            textButton="Amazônia"
            border="solid white 1px"
            colorFont=""
          />
        </div>
      </div>
    </div>
  );
}

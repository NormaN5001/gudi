import React from "react";

//images
import BannerImg from "../../../assets/banner.png";

//styles
import "./styles.css";

//components
import Button from "../../Button";

export default function Banner() {
  return (
    <section>
      <img src={BannerImg} alt="Banner do site" />
      <div className="content-banner">
        <h1>Para qual estado você deseja ir?</h1>
        <input type="text" placeholder="Pesquisar" />
        <Button textButton="buscar" bgColor="#005BD5" />
      </div>
    </section>
  );
}

import React from "react";

//styles
import "./styles.css";

//images
import MuralImg1 from "../../../assets/foto-mural1.png";
import MuralImg2 from "../../../assets/foto-mural2.png";
import MuralImg3 from "../../../assets/foto-mural3.png";
import MuralImg4 from "../../../assets/foto-mural4.png";
import MuralImg5 from "../../../assets/foto-mural5.png";
import MuralImg6 from "../../../assets/foto-mural6.png";

//icons
import IconGoal1 from "../../../assets/icon-goals1.png";
import IconGoal2 from "../../../assets/icon-goals2.png";
import IconGoal3 from "../../../assets/icon-goals3.png";
import IconGoal4 from "../../../assets/icon-goals4.png";

export default function Mural() {
  return (
    <div className="container-mural">
      <div className="texts-mural">
        <p className="hashtag-mural">use a hashtag #brasilisverigudig</p>
        <h3 className="title-mural">Nosso mural de Experiências</h3>
      </div>
      <div className="fotos-mural">
        <img src={MuralImg1} alt="Uma foto do mural" />
        <img src={MuralImg2} alt="Uma foto do mural" />
        <img src={MuralImg3} alt="Uma foto do mural" />
        <img src={MuralImg4} alt="Uma foto do mural" />
        <img src={MuralImg5} alt="Uma foto do mural" />
        <img src={MuralImg6} alt="Uma foto do mural" />
      </div>
      <div className="goals">
        <div className="card-grey">
          <img src={IconGoal1} alt="ícone do objetivo" />
          <p>O melhor do Brasil</p>
        </div>
        <div className="card-blue">
          <img src={IconGoal2} alt="ícone do objetivo" />
          <p>Cidades mais frequentadas</p>
        </div>
        <div className="card-grey">
          <img src={IconGoal3} alt="ícone do objetivo" />
          <p>Pontos turísticos</p>
        </div>
        <div className="card-blue">
          <img src={IconGoal4} alt="ícone do objetivo" />
          <p>Restaurantes</p>
        </div>
      </div>
    </div>
  );
}

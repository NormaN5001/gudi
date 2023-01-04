import React from "react";

//styles
import "./styles.scss";

//components
import CardTrip from "../CardTrip";

//images
import Image1 from "../../assets/image-viagem1.png";
import Image2 from "../../assets/image-viagem2.png";
import Image3 from "../../assets/image-viagem3.png";

export default function SectionTrip() {
  return (
    <div className="section-trip">
      <img src={Image1} alt="Imagem de pessoas em viagens" />
      <CardTrip
        bgColor="transparent"
        bgColorLine="white"
        bgGradient="linear-gradient(#005BD5, #002E6B )"
        colorFont="white"
        border="solid 1px white"
        title="O clima perfeito, no lugar perfeito"
        subTitle="Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço."
      />
      <CardTrip
        bgColor="transparent"
        bgColorLine="#005BD5"
        bgGradient="linear-gradient(white, white)"
        colorFont="#005BD5"
        border="solid 1px #005BD5"
        title="Curta uma nova vibe entre amigos"
        subTitle="Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi."
      />
      <img src={Image2} alt="Imagem de pessoas em viagens" />
      <img src={Image3} alt="Imagem de pessoas em viagens" />
      <CardTrip
        bgColor="transparent"
        bgColorLine="white"
        bgGradient="linear-gradient(#005BD5, #002E6B )"
        colorFont="white"
        border="solid 1px white"
        title="Algumas experiências são inexplicáveis"
        subTitle="Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural."
      />
    </div>
  );
}

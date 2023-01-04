import React from "react";

//styles
import "./styles.scss";

//icons
import Logo from "../../assets/logo.png";

//components
import Button from "../Button";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="footer-top">
        <h2 className="title-footer">Fale conosco</h2>
        <div className="container-inputs">
          <input type="email" placeholder="Diga o seu melhor email" />
          <input type="text" placeholder="Assunto" />
          <textarea className="text-area" placeholder="Escreva sua mensagem" />
        </div>
        <Button
          colorFont=""
          border="solid white 1.5px"
          textButton="Enviar"
          bgColor="transparent"
        />
      </div>
      <div className="footer-bottom">
        <div className="section-footer">
          <img className="logo" src={Logo} />
          <ul>
            <li>Sobre nós</li>
            <li>Mural de memórias</li>
            <li>Eventos Gudi</li>
            <li>Nosso blog</li>
          </ul>
        </div>
        <div className="section-footer">
          <h4>Contato</h4>
          <ul>
            <li>Chat Virtual</li>
            <li>SAC Online</li>
            <li>Ouvidoria</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="section-footer">
          <h4>Benefícios</h4>
          <ul>
            <li>Conta digital Gudi</li>
            <li>Viaje com Milhas</li>
            <li>C6 Átomos</li>
            <li>iD Jovem</li>
          </ul>
        </div>
        <div className="section-footer">
          <h4>Lugares</h4>
          <ul>
            <li>O melhor do Brasil</li>
            <li>Cidadas frequentes</li>
            <li>Pontos turísticos</li>
            <li>Restaurantes</li>
          </ul>
        </div>
        <div className="section-footer">
          <h4>Curiosidades</h4>
          <ul>
            <li>Cultura e tradições</li>
            <li>Pratos típicos</li>
            <li>Mitos brasileiros</li>
            <li>Carnaval</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

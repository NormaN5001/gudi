import React from "react";
import "./styles.css";

import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo do site Gudi" />
      <div className="nav-right">
        <nav>
          <ul id="menu">
            <li>Sobre</li>
            <li>Benefícios</li>
            <li>Contato</li>
            <button className="button-Mobile">Agendar</button>
          </ul>
        </nav>
        <button className="button-Desktop">Agendar</button>
      </div>
    </header>
  );
}

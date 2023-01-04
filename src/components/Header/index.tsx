import React from "react";
import "./styles.css";

// imagens/icons
import MobileClose from "../../assets/menu-mobile-close.png";
import MobileOpen from "../../assets/menu-mobile-open.png";

import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo do site Gudi" />
      <div className="nav-right">
        <nav>
          <input id="handle-click" type="checkbox" />
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

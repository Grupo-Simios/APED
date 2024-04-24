import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        <nav className="menu-desktop">
          <img src="src/assets/icons/aped-logo.svg" alt="" />
          <img
            className="menu-mobile"
            src="src/assets/icons/menu-mobile.svg"
            alt=""
            onClick={toggleMenu}
          />
          <ul>
            <li>
              <a href="#">Dúvidas</a>
            </li>
            <li>
              <a href="#">Valores</a>
            </li>
            <li>
              <a href="#">Padrinhos</a>
            </li>
            <li>
              <a href="#">Animais</a>
            </li>
            <li>
              <a href="#">Como ajudar</a>
            </li>
          </ul>
        </nav>
      </header>
      {isMenuOpen && <MobileMenu closeMenu={closeMenu} />} {/* Passando a função closeMenu */}
    </>
  );
}

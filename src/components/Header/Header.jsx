import MobileMenu from "../MobileMenu/MobileMenu";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <nav className="menu-desktop">
          <img src="src/assets/icons/aped-logo.svg" alt="" />
          <img
            className="menu-mobile"
            src="src/assets/icons/menu-mobile.svg"
            alt=""
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
      <MobileMenu />
    </>
  );
}

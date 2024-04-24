import { useState, useEffect } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onload = function () {
    scrollToSection("sectionId");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    setTimeout(function () {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }, 50);
  };

  useEffect(() => {
    const handleScroll = () => {
      const valoresSection = document.getElementById("valores");
      if (valoresSection) {
        const valoresSectionTop = valoresSection.getBoundingClientRect().top;
        if (valoresSectionTop <= 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={isScrolled ? "fixed" : ""}>
        <nav className="menu-desktop">
          <img className="logo" src="src/assets/icons/aped-logo.svg" alt="" />
          <img
            className="menu-mobile"
            src="src/assets/icons/menu-mobile.svg"
            alt=""
            onClick={toggleMenu}
          />
          <ul>
            <li>
              <a onClick={() => scrollToSection("duvidas")} href="#">
                Dúvidas
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("valores")} href="#">
                Valores
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("padrinhos")} href="#">
                Padrinhos
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("animais")} href="#">
                Animais
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("doacao")} href="#">
                Como ajudar
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {isMenuOpen && <MobileMenu closeMenu={closeMenu} />}
    </>
  );
}

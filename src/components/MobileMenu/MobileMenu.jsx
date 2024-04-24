import "./MobileMenu.css";

export default function MobileMenu({ closeMenu }) {
  window.onload = function () {
    scrollToSection("sectionId");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = section.offsetTop - 60;
    setTimeout(function () {
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }, 50);
    closeMenu();
  };

  const handleBackgroundClick = (event) => {
    if (event.target.id === "mobile-modal--background") {
      closeMenu();
    }
  };

  const handleButtonClick = () => {
    closeMenu();
  };

  return (
    <>
      <div
        id="mobile-modal--background"
        className={`mobile-modal--background active`}
        onClick={handleBackgroundClick}
      >
        <div className="mobile-modal--container">
          <nav>
            <button onClick={handleButtonClick}>X</button>
            <ul>
              <li onClick={() => scrollToSection("duvidas")}>Dúvidas</li>
              <li onClick={() => scrollToSection("valores")}>Valores</li>
              <li onClick={() => scrollToSection("padrinhos")}>Padrinhos</li>
              <li onClick={() => scrollToSection("animais")}>Animais</li>
              <li onClick={() => scrollToSection("doacao")}>Como ajudar</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

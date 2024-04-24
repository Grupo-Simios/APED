import "./MobileMenu.css";

export default function MobileMenu({ closeMenu }) {
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
        className="mobile-modal--background active"
        onClick={handleBackgroundClick}
      >
        <div className="mobile-modal--container">
          <nav>
            <button onClick={handleButtonClick}>X</button>
            <ul>
              <li>Dúvidas</li>
              <li>Valores</li>
              <li>Padrinhos</li>
              <li>Animais</li>
              <li>Como ajudar</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

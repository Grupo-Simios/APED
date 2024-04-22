import "./MobileMenu.css";

export default function MobileMenu() {
  return (
    <>
      <div className="mobile-modal--background active">
        <div className="mobile-modal--container">
          <nav>
            <button>X</button>
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

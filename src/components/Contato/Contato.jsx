import emailIcon from "../../assets/icons/email-icon.svg";
import instaIcon from "../../assets/icons/insta-icon.svg";
import apedLogo from "../../assets/icons/aped-logo.svg";
import "./Contato.css";

export default function Footer() {
  return (
    <>
      <div className="contato-background">
        <footer className="contato-container">
          <img src={apedLogo} alt="" />
          <div className="contato-items">
            <h1>Entre em contato conosco:</h1>
            <div className="contato-item">
              <p>grupoaped@gmail.com.br</p>
              <img src={emailIcon} alt="" />
            </div>
            <div className="contato-item">
              <a target="_blank" href="https://www.instagram.com/grupo.aped/">
                @grupo.aped
              </a>
              <img src={instaIcon} alt="" />
            </div>
          </div>
        </footer>
      </div>

      <div className="simios-background">
        <div className="simios-container">
          <a target="_blank" href="gruposimios.html">
            Desenvolvido por @gruposimios
          </a>
        </div>
      </div>
    </>
  );
}

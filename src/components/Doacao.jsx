import pixIcon from "../assets/icons/pix-icon.svg";
import wppIcon from "../assets/icons/wpp-icon.svg";
import emailIcon from "../assets/icons/email-icon.svg";
import cavalosImg from "../assets/cavalos/cavalos.png";
import "../styles/Doacao.css";

export default function Doacao() {
  return (
    <>
      <div className="doacoes-background">
        <section className="doacoes-container">
          <div className="doacoes-text--container">
            <div className="doacoes-text--title">
              <h2>Seja um doador</h2>
              <p>
                As doações são de extrema importância para continuarmos o
                projeto
              </p>
            </div>
            <div className="doacoes-text--content">
              <h3>Canais de doação</h3>
              <div className="doacoes-item">
                <img src={pixIcon} alt="" />
                <p>CNPJ: 00.000.000/0001-11</p>
              </div>
            </div>
            <div className="doacoes-text--content">
              <h3>Entre em contato</h3>
              <div className="doacoes-item">
                <img src={wppIcon} alt="" />
                <p>11 9999-9999</p>
              </div>
              <div className="doacoes-item">
                <img src={emailIcon} alt="" />
                    <p>ONG@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="doacoes-img">
            <img src={cavalosImg} alt="" />
          </div>
        </section>
      </div>
    </>
  );
}

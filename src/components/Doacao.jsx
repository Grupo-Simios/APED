import pixIcon from "../assets/icons/pix-icon.svg";
import wppIcon from "../assets/icons/wpp-icon.svg";
import emailIcon from "../assets/icons/email-icon.svg";
import cavalosImg from "../assets/cavalos/cavalos.png";
import Botao from "./Botao";
import "../styles/Doacao.css";
import DoacaoItem from "./DoacaoItem";

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
              <DoacaoItem img={pixIcon} text={"CNPJ: 00.000.000/0001-11"} />
            </div>
            <div className="doacoes-text--content">
              <h3>Entre em contato</h3>
              <DoacaoItem img={wppIcon} text={"11 9999-9999"} />
              <DoacaoItem img={emailIcon} text={"ONG@gmail.com"} />
            </div>
            <Botao text={"Confira para onde vão as doações"} />
          </div>
          <div className="doacoes-img">
            <img src={cavalosImg} alt="" />
          </div>
        </section>
      </div>
    </>
  );
}

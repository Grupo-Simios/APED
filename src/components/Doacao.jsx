import pixIcon from "../assets/icons/pix-icon.svg";
import wppIcon from "../assets/icons/wpp-icon.svg";
import emailIcon from "../assets/icons/email-icon.svg";
import cavalosImg from "../assets/cavalos/cavalos.png";
import Botao from "./Botao";
import "../styles/Doacao.css";
import DoacaoItem from "./DoacaoItem";
import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export default function Doacao() {
  initMercadoPago("TEST-561a9eb9-a9a0-4fe6-94d9-498e3470605d");
  const [preferenceId, setPreferenceId] = useState(null);

  const handleClick = async () => {
    const orderData = {
      title: "Doação",
      quantity: "1",
      price: "5",
    };

    const response = await fetch("http://localhost:3000/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    const preference = await response.json();
    setPreferenceId(preference.id);
  };

  return (
    <div className="doacoes-background">
      <section className="doacoes-container">
        <div className="doacoes-text--container">
          <div className="doacoes-text--title">
            <h2>Seja um doador</h2>
            <p>
              As doações são de extrema importância para continuarmos o projeto
            </p>
          </div>
          <div className="doacoes-text--content">
            <h3>Canais de doação</h3>
            <DoacaoItem img={pixIcon} text={"CNPJ: 00.000.000/0001-11"} />
            <button onClick={handleClick}>DOAR</button>
            {preferenceId && (
              <Wallet
                initialization={{ preferenceId }}
                customization={{ texts: { valueProp: "smart_option" } }}
              />
            )}
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
  );
}

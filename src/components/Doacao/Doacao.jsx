import pixIcon from "../../assets/icons/pix-icon.svg";
import qrcode from "../../assets/icons/qrcode.svg";
import mpago from "../../assets/icons/mercado-pago.svg";
import coracao from "../../assets/icons/coracao.svg";
import "./Doacao.css";
import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export default function Doacao() {
  initMercadoPago("TEST-561a9eb9-a9a0-4fe6-94d9-498e3470605d");
  const [preferenceId, setPreferenceId] = useState(null);
  const [valor, setValor] = useState("");

  const handleClick = async () => {
    const orderData = {
      title: "Doação",
      quantity: "1",
      price: valor,
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

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue >= 1) {
      setValor(inputValue);
    } else {
      setValor("");
    }
  };

  return (
    <>
      <div className="doacao-background">
        <section id="doacao" className="doacao-container">
          <img className="qr-code" src={qrcode} alt="" />
          <div className="doacao-formas">
            <div className="doacao-formas--item">
              <div className="doacao-item--title">
                <img src={pixIcon} alt="" />
                <h2>Pix</h2>
              </div>
              <p>CNPJ - 51.780.372/0001-59</p>
              <p>grupoaped@gmail.com.br</p>
            </div>
            <div className="doacao-formas--item">
              <div className="doacao-item--title">
                <img src={coracao} alt="" />
                <h2>Apoia-se</h2>
              </div>
              <a target="_blank" href="https://apoia.se/grupoaped">
                Acesse aqui e ajude mensalmente
              </a>
            </div>
            <div className="doacao-formas--item">
              <div className="doacao-item--title">
                <img src={mpago} alt="" />
                <h2>Mercado Pago</h2>
              </div>
              <p>Insira o valor a doar:</p>
              <input
                placeholder="Valor..."
                type="number"
                name="valor"
                id="valor"
                value={valor}
                onChange={handleChange}
              />
              <button className="doar-button" onClick={handleClick}>
                Doar
              </button>
              {preferenceId && (
                <div className="mpbutton">
                  <Wallet
                    style={{
                      width: "20px",
                    }}
                    initialization={{ preferenceId }}
                    customization={{ texts: { valueProp: "smart_option" } }}
                  />
                </div>
              )}
            </div>
          </div>
          <h1 className="title-section">Formas de doar</h1>
        </section>
      </div>
    </>
  );
}

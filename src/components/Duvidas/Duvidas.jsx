import "./Duvidas.css";
import { useState } from "react";
import Duvida from "../Duvida/Duvida";

const duvidas = [
  {
    question: "O que fazer quando encontrar um cavalo machucado?",
    answer: (
      <>
        {" "}
        <p>
          - Tire fotos, faça vídeos e anote informações relevantes, pois provas
          visuais são importantes.
        </p>{" "}
        <p>
          - Após isso, você deve ligar para a polícia, ou órgãos de proteção
          animal, pois denunciar é fundamental para a intervenção no caso.
        </p>
        <p> - Passe a localização exata de onde o animal está.</p>
        <p>
          - Não o alimente ou dê água sem perguntar a um veterinário ou
          protetor, caso o animal esteja deitado.
        </p>
        <br />
        <p>Polícia - 190</p>
        <p>Disque denúncia - 181</p>
      </>
    ),
  },
  {
    question: "Como ser um padrinho?",
    answer:
      "Para ser um padrinho ou madrinha, basta você entrar em contato conosco e escolher o animal que gostaria que fosse seu afilhado(a).",
  },
  {
    question: "Para onde vão as doações da ong?",
    answer:
      "Todas as doações são destinadas exclusivamente para cuidado e alimentação dos cavalos resgatados. Todos que trabalham para a ONG são voluntários, portanto o dinheiro arrecadado é de uso exclusivo para os animais, incluindo transporte deles quando necessário, melhorias nas instalações deles, compra de medicamentos, veterinário, feno, alfafa, ração, vacinas e muitos outros cuidados que eles necessitam.",
  },
  {
    question: "Como entro em contato para fazer doações?",
    answer: (
      <>
        <p>Você nos encontra através do Instagram, ou do nosso e-mail.</p>
        <p>
          Mas para doar, você pode utilizar nossos canais de pix ou apoia-se
        </p>
        <p>Pix: CNPJ 51.780.372/0001/19</p>
        <p>Apoia-se:</p>
        <br />
        <p>
          <a
            target="_blank"
            style={{ color: "#777777" }}
            href="https://apoia.se/grupoaped"
          >
            Acesse aqui e ajude mensalmente
          </a>
        </p>
      </>
    ),
  },
];

export default function Duvidas() {
  const [openedIndex, setOpenedIndex] = useState(null);

  const toggleDuvida = (index) => {
    setOpenedIndex(openedIndex === index ? null : index);
  };

  return (
    <>
      <div className="duvidas-background">
        <section id="duvidas" className="duvidas-container">
          <div className="section-title">
            <h2>Dúvidas frequentes</h2>
          </div>
          {duvidas.map((duvida, index) => (
            <Duvida
              key={index}
              question={duvida.question}
              answer={duvida.answer}
              isOpened={openedIndex === index}
              toggle={() => toggleDuvida(index)}
            />
          ))}
        </section>
      </div>
    </>
  );
}

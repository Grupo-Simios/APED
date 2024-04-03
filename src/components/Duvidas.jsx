import "../styles/Duvidas.css";
import { useState } from "react";
import Duvida from "./Duvida";

const duvidas = [
  {
    question: "O que fazer quando encontrar um cavalo machucado?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex, repudiandae consectetur quis hic cum possimus voluptatem, nemo ullam doloremque sint doloribus ab. Illo, et similique eos vel quibusdam aliquid.",
  },
  {
    question: "Como ser um padrinho?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex, repudiandae consectetur quis hic cum possimus voluptatem, nemo ullam doloremque sint doloribus ab. Illo, et similique eos vel quibusdam aliquid.",
  },
  {
    question: "Para onde vão as doações da ong?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex, repudiandae consectetur quis hic cum possimus voluptatem, nemo ullam doloremque sint doloribus ab. Illo, et similique eos vel quibusdam aliquid.",
  },
  {
    question: "Como entro em contato para fazer doações?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex, repudiandae consectetur quis hic cum possimus voluptatem, nemo ullam doloremque sint doloribus ab. Illo, et similique eos vel quibusdam aliquid.",
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
        <div className="duvidas-container">
          <div className="section-title">
            <h2>Dúvidas</h2>
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
        </div>
      </div>
    </>
  );
}

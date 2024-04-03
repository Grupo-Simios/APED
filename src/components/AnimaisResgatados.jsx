import "../styles/AnimaisResgatados.css";
import cavalo1 from "../assets/cavalos/cavalo1.png";
import cavalo2 from "../assets/cavalos/cavalo2.png";
import cavalo3 from "../assets/cavalos/cavalo3.png";
import masculinoImage from "../assets/icons/sexo-masculino.svg";
import previousButton from "../assets/icons/previous-button.svg";
import nextButton from "../assets/icons/next-button.svg";
import CavaloCard from "./CavaloCard";
import Botao from "./Botao";

export default function AnimaisResgatados() {
  const cavalos = [
    {
      nome: "Atlas1",
      sexo: masculinoImage,
      img: cavalo1,
      alt: "Cavalos marrom de olhos azuis",
      idade: "12 anos",
      qualidades: ["Dócil", "Brincalhão", "Calmo"],
      descricao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Similique commodi ratione eius omnis delectus beatae repellendus sequi perferendis deserunt deleniti",
    },
    {
      nome: "Atlas2",
      sexo: masculinoImage,
      img: cavalo2,
      alt: "Cavalos marrom de olhos azuis",
      idade: "12 anos",
      qualidades: ["Dócil", "Brincalhão", "Calmo"],
      descricao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Similique commodi ratione eius omnis delectus beatae repellendus sequi perferendis deserunt deleniti",
    },
    {
      nome: "Atlas3",
      sexo: masculinoImage,
      img: cavalo3,
      alt: "Cavalos marrom de olhos azuis",
      idade: "12 anos",
      qualidades: ["Dócil", "Brincalhão", "Calmo"],
      descricao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Similique commodi ratione eius omnis delectus beatae repellendus sequi perferendis deserunt deleniti",
    },
  ];

  return (
    <>
      <div className="animais-resgatados--background">
        <div className="title-container">
          <div className="title-content">
            <h1 className="title">Animais Resgatados</h1>
          </div>
        </div>
      </div>

      <div className="horses-cards--background">
        <div className="horses-cards--container">
          <button className="button prev">
            <img src={previousButton} alt="" />
          </button>
          <div className="horses-cards">
            {cavalos.map((cavalo, index) => (
              <CavaloCard
                key={index}
                nome={cavalo.nome}
                sexo={cavalo.sexo}
                img={cavalo.img}
                alt={cavalo.alt}
                idade={cavalo.idade}
                qualidades={cavalo.qualidades}
                descricao={cavalo.descricao}
              />
            ))}
          </div>
          <button className="button next">
            <img src={nextButton} alt="" />
          </button>
        </div>
      </div>

      <div className="current-slides--background">
        <div className="current-slides--container">
          <span className="current-slides"></span>
          <span className="current-slides"></span>
          <span className="current-slides"></span>
        </div>
        <Botao text={"Quero ser padrinho"} />
      </div>
    </>
  );
}

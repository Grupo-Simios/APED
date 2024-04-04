import React, { useState, useEffect } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Inicialmente, mostrar 3 cavalos por slide

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const updateSlidesToShow = () => {
    if (window.innerWidth < 768) {
      setSlidesToShow(1);
    } else if (window.innerWidth >= 768 && window.innerWidth < 900) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  const [cavalos] = useState([
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
    // Adicione mais cavalos aqui...
  ]);

  const totalSlides = Math.ceil(cavalos.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  return (
    <div className="animais-resgatados--container">
      <div className="animais-resgatados--background">
        <div className="title-container">
          <div className="title-content">
            <h1 className="title">Animais Resgatados</h1>
          </div>
        </div>
      </div>

      <div className="horses-cards--background">
        <div className="horses-cards--container">
          <button className="button prev" onClick={prevSlide}>
            <img src={previousButton} alt="Previous" />
          </button>
          <div className="horses-cards">
            {cavalos
              .slice(
                currentSlide * slidesToShow,
                (currentSlide + 1) * slidesToShow
              )
              .map((cavalo, index) => (
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
          <button className="button next" onClick={nextSlide}>
            <img src={nextButton} alt="Next" />
          </button>
        </div>
      </div>

      <div className="current-slides--background">
        <div className="current-slides--container">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={
                index === currentSlide
                  ? "current-slides active"
                  : "current-slides"
              }
            ></span>
          ))}
        </div>
        <Botao text={"Quero ser padrinho"} />
      </div>
    </div>
  );
}

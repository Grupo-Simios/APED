import { useState, useEffect, useMemo } from "react";
import cavalosData from "../../script/cavalosData";
import previousButton from "../../assets/icons/previous-button.svg";
import nextButton from "../../assets/icons/next-button.svg";
import CavaloCard from "../CavaloCard/CavaloCard";
import Botao from "../Botao/Botao";
import "./AnimaisResgatados.css";

export default function AnimaisResgatados() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setSlidesToShow(1);
      } else if (screenWidth >= 768 && screenWidth < 900) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const [cavalos] = useState(cavalosData);

  const totalSlides = useMemo(
    () => Math.ceil(cavalos.length / slidesToShow),
    [cavalos.length, slidesToShow]
  );

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
            <h1 className="title">
              Animais disponíveis para receber um padrinho ou madrinha
            </h1>
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
        <Botao text={"Quero ser um padrinho(a)"} />
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import "./ConhecaMais.css";
import cavalosImage from "../../assets/cavalos/cavalos.svg";
import cavalinho from "../../assets/cavalos/cavalinho.svg";

export default function ConhecaMais() {
  const [imageSrc, setImageSrc] = useState(cavalosImage);

  useEffect(() => {
    const handleResize = () => {
      setImageSrc(window.innerWidth < 768 ? cavalinho : cavalosImage);
    };

    handleResize(); // Chamada inicial para definir a imagem com base no tamanho da tela atual

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Dependência vazia para executar o efeito apenas uma vez durante a montagem

  window.onload = function () {
    scrollToSection("sectionId");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = section.offsetTop - 74;
    setTimeout(function () {
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <>
      <div className="conheca-mais-background">
        <section className="conheca-mais-container">
          <div className="txt-topo-site">
            <h1>Conheça mais sobre a APED</h1>
            <p>
              A APED nasceu do amor por cavalos e da união. Não possuímos nenhum
              apoio público, mas fazemos voluntariamente o trabalho de resgate
              de cavalos e animais de grande porte vítimas de abandono e maus
              tratos.
            </p>

            <button
              onClick={() => scrollToSection("doacao")}
              className="btn-quero-ajudar"
            >
              Quero ajudar!
            </button>
          </div>
          <div className="img-section">
            <img src={imageSrc} alt="" />
          </div>
        </section>
      </div>
    </>
  );
}

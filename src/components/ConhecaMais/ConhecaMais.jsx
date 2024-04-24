import "./ConhecaMais.css";
import cavalosImage from "../../assets/cavalos/cavalos.svg";
import cavalinho from "../../assets/cavalos/cavalos.svg";

export default function ConhecaMais() {
  window.onload = function () {
    scrollToSection("sectionId");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    setTimeout(function () {
      window.scrollTo({
        top: section.offsetTop,
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
            <img src={cavalosImage} alt="" />
          </div>
        </section>
      </div>
    </>
  );
}

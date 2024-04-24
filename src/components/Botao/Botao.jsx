import "./Botao.css";

export default function Botao({ text }) {
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
      <div className="button-container">
        <button onClick={() => scrollToSection("doacao")}>{text}</button>
      </div>
    </>
  );
}

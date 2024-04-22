import "./Botao.css";

export default function Botao({ text }) {
  return (
    <>
      <div className="button-container">
        <button>{text}</button>
      </div>
    </>
  );
}

import "../styles/DoacaoItem.css";

export default function DoacaoItem({ img, text }) {
  return (
    <>
      <div className="doacoes-item">
        <img src={img} />
        <p>{text}</p>
      </div>
    </>
  );
}

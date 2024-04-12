import "../styles/CavaloCard.css";

export default function CavalosCard({
  nome,
  sexo,
  img,
  alt,
  idade,
  qualidades,
  descricao,
}) {
  return (
    <>
      <div className="horse-card">
        <div className="horse-name--card">
          <h3 className="horse-name">{nome}</h3>
          <img src={sexo} alt="" />
        </div>
        <img className="cavalo-image" src={img} alt={alt} />
        <div className="text-container">
          <span>{idade}</span>
          <p>{descricao}</p>
        </div>
      </div>
    </>
  );
}

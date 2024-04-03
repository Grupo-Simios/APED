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
        <div className="horse-image--container">
          <img src={img} alt={alt} />
        </div>
        <div className="text-container">
          <span className="idade">{idade}</span>
          <div className="qualities-container">
            {qualidades.map((qualidade, index) => (
              <span key={index} className="quality">
                {qualidade}
              </span>
            ))}
          </div>
          <p className="desc">{descricao}</p>
        </div>
      </div>
    </>
  );
}

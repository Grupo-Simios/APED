import "./Missoes.css";

export default function Missoes() {
  return (
    <>
      <div className="missoes-background">
        <section id="valores" className="missoes-container">
          <div className="retangulo-cards">
            <div className="card">
              <img src="./src/assets/primeirassecoes/missao.svg" alt="missão" />
              <h2>Missão</h2>
              <p>
                Proporcionar uma vida digna e livre de maus-tratos aos cavalos
                em situações vulneráveis, resgatando, reabilitando e educando a
                comunidade sobre o bem-estar equino.
              </p>
            </div>

            <div className="card">
              <img src="./src/assets/primeirassecoes/visao.svg" alt="visão" />
              <h2>Visão</h2>
              <p>
                Ser reconhecida como uma comunidade apaixonada e unida,
                comprometida em dar uma segunda chance aos cavalos, promovendo
                uma cultura de respeito e cuidado responsável, onde equinos e
                humanos convivam em harmonia.
              </p>
            </div>

            <div className="card">
              <img src="./src/assets/primeirassecoes/valores.svg" alt="visão" />
              <h2>Valores</h2>
              <p>
                <strong>Compaixão:</strong> Por todos os cavalos, reconhecendo
                sua nobreza e dignidade como seres vivos.
              </p>
              <p>
                <strong>Integridade:</strong> Agimos com honestidade,
                transparência e ética em cada doação e resgate.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

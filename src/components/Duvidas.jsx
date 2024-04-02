import "../styles/Duvidas.css";
import closedIcon from "../assets/icons/closed-icon.svg";
import openedIcon from "../assets/icons/opened-icon.svg";

export default function Duvidas() {
  return (
    <>
      <div className="duvidas-background">
        <div className="duvidas-container">
          <div className="section-title">
            <h2>Dúvidas</h2>
          </div>

          <div className="duvidas-content">
            <div className="duvidas-content--title">
              <h3>O que fazer quando encontrar um cavalo machucado?</h3>
              <img src={openedIcon} alt="" />
            </div>
            <div className="duvidas-content--desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                ex, repudiandae consectetur quis hic cum possimus voluptatem,
                nemo ullam doloremque sint doloribus ab. Illo, et similique eos
                vel quibusdam aliquid.
              </p>
            </div>
            <div className="duvidas-content--title">
              <h3>Como ser um padrinho?</h3>
              <img src={openedIcon} alt="" />
            </div>

            <div className="duvidas-content--title">
              <h3>Para onde vão as doações da ong?</h3>
              <img src={openedIcon} alt="" />
            </div>
            <div className="duvidas-content--title">
              <h3>Como entro em contato para fazer doações?</h3>
              <img src={openedIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

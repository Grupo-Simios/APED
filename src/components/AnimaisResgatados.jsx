import "../styles/AnimaisResgatados.css";
import cavalo1 from "../assets/cavalos/cavalo1.png";
import cavalo2 from "../assets/cavalos/cavalo2.png";
import cavalo3 from "../assets/cavalos/cavalo3.png";
import masculinoImage from "../assets/icons/sexo-masculino.svg";
import previousButton from "../assets/icons/previous-button.svg";
import nextButton from "../assets/icons/next-button.svg";

export default function AnimaisResgatados() {
  const cavalos = [
    {
      nome: "Atlas1",
      img: { cavalo1 },
      idade: "12 anos",
      qualidades: ["Dócil", "Brincalhão", "Calmo"],
      descricao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Similique commodi ratione eius omnis delectus beatae repellendus sequi perferendis deserunt deleniti, aut cumque. Fugiat numquam quia rerum, fuga doloremque pariatur soluta. orem ipsum dolor sit, amet consectetur adipisicing elit.Pariatur voluptatem, eveniet sapiente error eum deleniti perferendis asperiores veniam, molestiae ab rerum maiores! Ratione nobis eum eius deleniti maiores accusamus. Nemo?",
    },
    {
      nome: "Atlas2",
      img: { cavalo2 },
      idade: "12 anos",
      qualidades: ["Dócil", "Brincalhão", "Calmo"],
      descricao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.    Similique commodi ratione eius omnis delectus beatae repellendus sequi perferendis deserunt deleniti, aut cumque.Fugiat numquam quia rerum, fuga doloremque pariatur soluta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur voluptatem, eveniet sapiente error eum delenit perferendis asperiores veniam, molestiae ab rerum maiores!Ratione nobis eum eius deleniti maiores accusamus. Nemo?",
    },
    {
      nome: "Atlas3",
      img: { cavalo3 },
      idade: "12 anos",
      qualidades: ["Dócil", "Brincalhão", "Calmo"],
      descricao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.    Similique commodi ratione eius omnis delectus beatae repellendus sequi perferendis deserunt deleniti, aut cumque.  Fugiat numquam quia rerum, fuga doloremque pariatur soluta. Lorem ipsum dolor sit, amet consectetur adipisicing elit.Pariatur voluptatem, eveniet sapiente error eum delenitiperferendis asperiores veniam, molestiae ab rerum maiores! Ratione nobis eum eius deleniti maiores accusamus. Nemo?",
    },
  ];

  return (
    <>
      <div className="animais-resgatados--background">
        <div className="title-container">
          <div className="title-content">
            <h1 className="title">Animais Resgatados</h1>
          </div>
        </div>
      </div>

      <div className="horses-cards--background">
        <div className="horses-cards--container">
          <button className="prev">
            <img src={previousButton} alt="" />
          </button>
          <div className="horses-cards">
            <div className="horse-card">
              <div className="horse-name--card">
                <h3 className="horse-name">Atlas</h3>
                <img src={masculinoImage} alt="" />
              </div>
              <div className="horse-image--container">
                <img src={cavalo1} alt="" />
              </div>
              <div className="text-container">
                <span className="idade">12 anos</span>
                <div className="qualities-container">
                  <span className="quality">Dócil</span>
                  <span className="quality">Brincalhão</span>
                  <span className="quality">Calmo</span>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique commodi ratione eius omnis delectus beatae
                  repellendus sequi perferendis deserunt deleniti, aut cumque.
                  Fugiat numquam quia rerum, fuga doloremque pariatur soluta.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Pariatur voluptatem, eveniet sapiente error eum deleniti
                  perferendis asperiores veniam, molestiae ab rerum maiores!
                  Ratione nobis eum eius deleniti maiores accusamus. Nemo?
                </p>
              </div>
            </div>
            <div className="horse-card">
              <div className="horse-name--card">
                <h3 className="horse-name">Atlas</h3>
                <img src={masculinoImage} alt="" />
              </div>
              <div className="horse-image--container">
                <img src={cavalo1} alt="" />
              </div>
              <div className="text-container">
                <span className="idade">12 anos</span>
                <div className="qualities-container">
                  <span className="quality">Dócil</span>
                  <span className="quality">Brincalhão</span>
                  <span className="quality">Calmo</span>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique commodi ratione eius omnis delectus beatae
                  repellendus sequi perferendis deserunt deleniti, aut cumque.
                  Fugiat numquam quia rerum, fuga doloremque pariatur soluta.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Pariatur voluptatem, eveniet sapiente error eum deleniti
                  perferendis asperiores veniam, molestiae ab rerum maiores!
                  Ratione nobis eum eius deleniti maiores accusamus. Nemo?
                </p>
              </div>
            </div>
            <div className="horse-card">
              <div className="horse-name--card">
                <h3 className="horse-name">Atlas</h3>
                <img src={masculinoImage} alt="" />
              </div>
              <div className="horse-image--container">
                <img src={cavalo1} alt="" />
              </div>
              <div className="text-container">
                <span className="idade">12 anos</span>
                <div className="qualities-container">
                  <span className="quality">Dócil</span>
                  <span className="quality">Brincalhão</span>
                  <span className="quality">Calmo</span>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique commodi ratione eius omnis delectus beatae
                  repellendus sequi perferendis deserunt deleniti, aut cumque.
                  Fugiat numquam quia rerum, fuga doloremque pariatur soluta.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Pariatur voluptatem, eveniet sapiente error eum deleniti
                  perferendis asperiores veniam, molestiae ab rerum maiores!
                  Ratione nobis eum eius deleniti maiores accusamus. Nemo?
                </p>
              </div>
            </div>
          </div>
          <button className="next">
            <img src={nextButton} alt="" />
          </button>
        </div>
      </div>

      <div className="current-slides--background">
        <div className="current-slides--container">
          <span className="current-slides"></span>
          <span className="current-slides"></span>
          <span className="current-slides"></span>
        </div>
      </div>
    </>
  );
}

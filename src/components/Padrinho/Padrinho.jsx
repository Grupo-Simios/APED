import "./Padrinho.css";

export default function Padrinho() {
  return (
    <>
      <div className="section-2--background">
        <section id="padrinhos" className="section-2--container">
          <div className="img-secao">
            <img src="src/assets/primeirassecoes/section-2.svg" alt="" />
          </div>

          <div className="section2-text--container">
            <div className="section-2--text">
              <h2>O que é ser um padrinho ou madrinha?</h2>
              <p>
                Você escolhe um dos animais, e envia todo mês um valor que será
                destinado exclusivamente para o seu afilhado(a). Além disso,
                você recebe notícias e fotos exclusivas do animal. Você também
                pode visitá-lo com horário previamente agendado e ter a
                oportunidade de interagir com ele. O valor sugerido é de R$
                100,00 mensais, mas você pode escolher outro valor, caso queira.
              </p>
            </div>
            <div className="section-2--text">
              <h2>Por que ser um padrinho?</h2>
              <p>
                Você ama cavalos, mas não pode acolher um animal agora? Seja uma
                madrinha ou padrinho de um de nossos resgatados. Esteja pronto
                para derramar lágrimas e se emocionar com as histórias deles.
                Eles enviam cartinhas e nunca esquecem do seu aniversário.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

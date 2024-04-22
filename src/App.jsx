import AnimaisResgatados from "./components/AnimaisResgatados/AnimaisResgatados.jsx";
import Doacao from "./components/Doacao/Doacao.jsx";
import Duvidas from "./components/Duvidas/Duvidas.jsx";
import Contato from "./components/Contato/Contato.jsx";
import Header from "./components/Header/Header.jsx";
import ConhecaMais from "./components/ConhecaMais/ConhecaMais.jsx";
import Missoes from "./components/Missoes/Missoes.jsx";
import Padrinho from "./components/Padrinho/Padrinho.jsx";
import QuemSomos from "./components/QuemSomos/QuemSomos.jsx";

export default function App() {
  return (
    <>
      <Header />
      <ConhecaMais />
      <Missoes />
      <Padrinho />
      <QuemSomos />
      <AnimaisResgatados />
      <Duvidas />
      <Doacao />
      <Contato />
    </>
  );
}

import Adress from "../adress";
import Footer from "../footer";
import Squad from "../squad";
import Cta from "./cta";
import Servicos from "./servicos";
import Sobre from "./sobre"

export default function Main() {
  return (
    <>
      <Cta />
      <Sobre />
      <Servicos />
      <Squad />
      <Adress />
      <Footer />
    </>
  );
};
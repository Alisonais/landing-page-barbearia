import Logo from "../utils/logos/LogoCostaBarbearia";
import GitHub from "../utils/logos/gitHub";
import Linkedin from "../utils/logos/linkedin";
import Whatsapp from "../utils/logos/whatsapp";


export default function Footer() {
  return (
    <footer
      className="w-full h-full p-4 "
    >
      <Logo />

      <div>
        <p
          className=" p-2 text-azulEscuro text-center font-bold "
        >Desenvolvido por Alison Silva</p>
        <div
          className=" flex flex-row justify-center gap-2 p-2 stroke-azulEscuro "
        >
          <GitHub
            url="https://github.com/Alisonais"
          />
          <Whatsapp 
          text="Olá vim pelo site da barbearia e gostaria de tirar algumas dúvidas"
          />
          <Linkedin 
          url="https://www.linkedin.com/in/alisonais/"
          />
        </div>
      </div>
    </footer>
  );
};
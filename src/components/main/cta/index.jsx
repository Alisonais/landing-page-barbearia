import Buttom from "@/components/Button";
import WhatsApp from "../../../../public/whatsapp logo";
import Instagram from "../../../../public/instagram logo";
import { backgroundCta, backgroundLinearGradientCta } from '../../utils/imageLinks'
import Logo from "@/components/utils/logos/LogoCostaBarbearia";

export default function Cta() {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundCta})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      }}
      className="h-full"
    >
      <div
        className=" h-full w-full text-white flex flex-col items-center justify-evenly p-4 md:p-8 lg:p-16 xl:p-20 "
        style={{ background: `${backgroundLinearGradientCta}` }}
      >
        <div>

          <Logo />

          <h1
            className="text-[22px] p-8 font-bold text-center lg:text-[32px] xl:text-[40px] xl: "
          >
            Elegância, Ousadia e Barba Alinhada
          </h1>
        </div>

        <div>
          <h2 className=" text-[18px] text-center lg:text-[22px] xl:text-[32px] xl:pb-8 ">
            Horário de funcionamento: <br /> 08:00h às 19:00h de terça à quarta. <br />
            08:00h às 21:00h de quinta à sabado.
          </h2>
        </div>

        <Buttom content="Agende Agora" />

        <div>
          <h2 className=" text-[18px] text-center p-5 lg:text-[22px] xl:text-[32px] xl:pb-8 ">
            conheça nosso instagram, e se tiver alguma dúvida chama no whatsApp
          </h2>
        </div>

        <div
          className="flex gap-8 "
        >
          <div className="h-6 w-6 md:h-10 md:w-10 lg:h-14 lg:w-14 hover:scale-110 transition-all ease-in-out duration-500 ">
            <Instagram />
          </div>
          <div className="h-6 w-6 md:h-10 md:w-10 lg:h-14 lg:w-14 hover:scale-110 transition-all ease-in-out duration-500 ">
            <WhatsApp />
          </div>

        </div>
      </div>

    </section>
  );
};

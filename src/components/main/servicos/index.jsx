import { backgroundCta, backgroundlinearServicos } from "@/components/utils/imageLinks";
import Card from "./card";

export default function Servicos() {
  return (
    <section
      className=" py-8 px-4 flex flex-col items-center gap-4 "
      style={{
        background: `${backgroundlinearServicos}`
      }}
    >

      <h2 className=" font-bold text-[40px] text-center " >
        Serviços
      </h2>

      <p className=" text-center md:p-8 md:px-20  " >
        Costa Barber Shop é uma ótima opção para homens que buscam um lugar para cuidar do seu visual. A barbearia oferece uma variedade de serviços de qualidade, prestados por um profissional experiente e qualifica.
      </p>

      <div className="  flex flex-col gap-4 md:w-[900px] md:flex-row md:flex-wrap justify-center " >
        <Card
          img={backgroundCta}
          title="CABELO"
          price={25}
        />

        <Card
          img={backgroundCta}
          title="BARBA"
          price={20}
        />

        <Card
          img={backgroundCta}
          title="CABELO E BARBA"
          price={40}
        />
      </div>

      <h2 className=" font-bold text-[40px] text-center " >
        Planos
      </h2>

      <p className=" text-center md:p-8 md:px-20  " >
        Quer economizar, mas não quer abrir mão do estilo? temos  planos perfeitos para você!
      </p>
      <div className="  flex flex-col gap-4 md:w-[900px] md:flex-row md:flex-wrap justify-center " >
        <Card
          img={backgroundCta}
          title="4 CORTES"
          price={80}
        />

        <Card
          img={backgroundCta}
          title="4 CORTES  2 BARBA"
          price={110}
        />

        <Card
          img={backgroundCta}
          title="4 CORTES  4 BARBA"
          price={140}
        />
      </div>

    </section >
  );
};
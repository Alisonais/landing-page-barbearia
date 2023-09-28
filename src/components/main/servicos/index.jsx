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

      <div>
        <Card
          img={backgroundCta}
          title="Corte de cabelo"
          price={45}
        />

        <Card
          img={backgroundCta}
          title="Corte de cabelo"
          price={45}
        />

        <Card
          img={backgroundCta}
          title="Corte de cabelo"
          price={45}
        />
      </div>

    </section>
  );
};
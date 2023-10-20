"use client"
import { backgroundlinearServicos, imagem1corte, imagem2corte, imagem3corte, imagem4corte, imagem5corte, imagem7corte } from "@/components/utils/imageLinks";
import Card from "./card";

export default function Servicos() {

  function handleBookMe(){
    window.open("https://costabarbershop.youcanbook.me/")
  };

  function handleWhats(){
    window.open("https://api.whatsapp.com/send?phone=5512981666880&text=Ol%C3%A1%20eu%20vim%20pelo%20site%20e%20quero%20adquirir%20um%20plano%20mensal")
  };

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
        Costa Barber Shop é uma ótima opção para homens que buscam um lugar para cuidar do seu visual. A barbearia oferece uma variedade de serviços de qualidade, prestados por um profissional experiente e qualificado.
      </p>

      <div className="  flex flex-col gap-4 md:w-[900px] md:flex-row md:flex-wrap justify-center " >
        <Card
          img={imagem1corte.src}
          title="CABELO"
          price={25}
          handle={handleBookMe}

        />

        <Card
          img={imagem2corte.src}
          title="BARBA"
          price={20}
          handle={handleBookMe}
        />

        <Card
          img={imagem3corte.src}
          title="CABELO E BARBA"
          price={40}
          handle={handleBookMe}
        />
      </div>

      <h2 className=" font-bold text-[40px] text-center " >
        Planos
      </h2>

      <p className=" text-center md:p-8 md:px-20  " >
        Quer economizar, mas não quer abrir mão do estilo? Temos  planos perfeitos para você!
      </p>
      <div className="  flex flex-col gap-4 md:w-[900px] md:flex-row md:flex-wrap justify-center " >
        <Card
          img={imagem4corte.src}
          title="4 CORTES"
          price={80}
          handle={handleWhats}
        />

        <Card
          img={imagem5corte.src}
          title="4 CORTES  2 BARBA"
          price={110}
          handle={handleWhats}
        />

        <Card
          img={imagem7corte.src}
          title="4 CORTES  4 BARBA"
          price={140}
          handle={handleWhats}
        />
      </div>

    </section >
  );
};
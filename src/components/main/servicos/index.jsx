"use client"
import Title from "@/components/Title";
import { backgroundlinearServicos, corteBarba1Image, corteBarba2Image, cortecabelo1Image, cortecabelo2Image, imagem5corte, imagem7corte, tabelaServicoImage } from "@/components/utils/imageLinks";
import Image from "next/image";
import Card from "./card";

export default function Servicos() {
  function handleBookMe(){
    window.open("https://costabarbershop.youcanbook.me/")
  };

  function handleWhats(){
    window.open("https://api.whatsapp.com/send?phone=5512981666880&text=Ol%C3%A1%20eu%20vim%20pelo%20site%20e%20quero%20adquirir%20um%20plano%20mensal")
  };

  const tel = '5512981666880'

    function handlelink(text){
      const textEncode = encodeURI(text);
      window.open(`https://api.whatsapp.com/send?phone=55${tel}&text=${textEncode}`)
    }

  return (
      <section
      className=" py-8 px-4 flex flex-col items-center gap-4 "
      style={{
        background: `${backgroundlinearServicos}`
      }}
    >

      <h2 className=" font-bold text-[40px] text-center " >
        <Title title='Serviços' />
      </h2>

      <p className=" text-center md:text-xl lg:text-2xl md:p-8 md:px-20  " >
        Costa Barber Shop é uma ótima opção para homens que buscam um lugar para cuidar do seu visual. A barbearia oferece uma variedade de serviços de qualidade, prestados por um profissional experiente e qualificado.
      </p>

      <div className="  flex flex-col gap-4 md:w-[900px] lg:w-[1000px] md:flex-row md:flex-wrap justify-center " >
        <Card
          img={imagem7corte.src}
          title="CABELO"
          price={30}
          handle={handleBookMe}
        
        />

        <Card
          img={corteBarba1Image.src}
          title="BARBA"
          price={25}
          handle={handleBookMe}
        />

        <Card
          img={corteBarba2Image.src}
          title="CABELO E BARBA"
          price={50}
          handle={handleBookMe}
        />
      </div>

      <h2 className=" font-bold text-[40px] text-center " >
      <Title title='Assinatura' />
      </h2>

      <p className=" text-center md:text-xl lg:text-2xl md:p-8 md:px-20  " >
        Quer economizar, mas não quer abrir mão do estilo, Temos plano de assinatura perfeito para você com uso ilimitado!
      </p>
      <div className="  flex flex-col gap-4 md:w-[900px] lg:w-[1000px] md:flex-row md:flex-wrap justify-center " >
        <Card
          img={cortecabelo1Image.src}
          title="CORTE"
          subtitle="Terça e Quinta"
          price={100}
          handle={()=> handlelink('Olá, gostaria adquirir um plano mensal para 4 CORTES')}
        />

        <Card
          img={cortecabelo2Image.src}
          title="CORTE E BARBA"
          subtitle="Terça e Quinta"
          price={180}
          handle={()=> handlelink('Olá, gostaria adquirir um plano mensal para 4 CORTES e 2 BARBAS')}
        />

        <Card
          img={imagem5corte.src}
          title="CORTE"
          subtitle="TODOS OS DIAS"
          price={114.99}
          handle={()=> handlelink('Olá, gostaria adquirir um plano mensal para 4 CORTES e 4 BARBAS')}
        />

        <Card
          img={corteBarba2Image.src}
          title="CORTE E BARBA"
          subtitle="TODOS OS DIAS"
          price={194.99}
          handle={()=> handlelink('Olá, gostaria adquirir um plano mensal para 4 CORTES e 4 BARBAS')}
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <h2 className=" font-bold text-[28px] text-center " >
        Veja nossa lista completa de serviços
      </h2>
        <Image className="rounded-xl" width={400} height={200} src={tabelaServicoImage.src} alt="tabela de serviços" />
      </div>
      
    </section >
  );
};
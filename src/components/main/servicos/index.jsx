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
        Lorem ipsum dolor sit amet consectetur. Etiam mus vitae lectus proin pellentesque mattis iaculis. In viverra accumsan sagittis tempus duis a. Sagittis mollis a eu urna eget id.
      </p>

      <Card 
        img={backgroundCta}
        title="Corte de cabelo"
        price={45}
      />

    </section>
  );
};
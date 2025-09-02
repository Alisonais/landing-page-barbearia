import dynamic from "next/dynamic";
import Title from "../Title";
import { brunoSquadImage, luizFernandoImage } from "../utils/imageLinks";
const Member = dynamic (()=> import("../squad/menber") );

export default function Squad() {
  return (
    <section
      className="bg-azulEscuro h-full w-full p-8 flex flex-col items-center "
    >
      <h2
        className="text-[#646464] text-[44px] font-bold pb-4 "
      >
        <Title title='Equipe' />
      </h2>

      <div className="flex flex-col gap-4" >
      <Member 
      imagem={brunoSquadImage} 
      linkInsta={"https://www.instagram.com/_bruniiinho/"}
      name={'Bruno'} 
      />
      <Member 
      imagem={luizFernandoImage} 
      linkInsta={"https://www.instagram.com/ruivo2x/"}
      name={'Luis Fernando'}
      />
      </div>
      
    </section>
  );
};
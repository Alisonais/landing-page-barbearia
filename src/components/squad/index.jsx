
import Member from "./menber";

export default function Squad() {
  return (
    <section
      className="bg-azulEscuro h-full w-full p-8 flex flex-col items-center "
    >
      <h2
        className="text-[#646464] text-[44px] font-bold pb-4 "
      >
        Equipe
      </h2>

      <Member />
      
    </section>
  );
};
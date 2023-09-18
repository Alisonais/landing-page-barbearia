import Buttom from "@/components/Button";
import Image from "next/image";
import WhatsApp from "../../../../public/whatsapp logo";
import Instagram from "../../../../public/instagram logo";

export default function Cta() {
  return (
    <section
      style={{
        backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/a6d6/0d63/65ff1a8d2c495d2648ad67e067ef5b70?Expires=1695600000&Signature=DfoASvvfQDWz8~ayqhxXpvp93dGWkwPkgwKhWmi-rNtdzLfbAm9Iz2Jk3Cy91Xb7-NWWCeUEVfp9TYIby-Ou-nZxtQuleLQ~CN95EH5SVKnz-WtW-iz988gAjS2FQfHgBRXjQnqTbuef3ldMBTAPTSSBxL20Q7NuLhRiGCtKkK2KmjA5HeNA7CZ3fqSEDGnsxB3Jk6vb4K2O9MjYBapZ9-0tBY6XyQLjf-snIC1QcB~ZY5JN2S1citOoJ~xROJioS2j0F546ICkYQWH-R8j40Y0TuHztGZhd0ZngfwnadayCoprqjdGspjr0fSeh6wmofuyMHher9ic7fpTKiJdNoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        width: '1440px',
        height: '900px',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      }}
    >
      <div
        className=" h-full w-full text-white flex flex-col items-center justify-evenly p-20 "
        style={{ background: 'linear-gradient(180deg, #0D121E 0%, rgba(13, 18, 30, 0.51) 25%, rgba(13, 18, 30, 0.32) 51.56%, rgba(13, 18, 30, 0.51) 76.04%, #0D121E 100%)' }}
      >
        <div>
          <h1
            className="text-[44px] font-bold text-center px-40 "
          >
            ESTILO É UM REFLEXO DA SUA ATITUDE E
            SUA PERSONALIDADE
          </h1>
        </div>

        <div>
          <h2 className=" text-[28px] text-center ">
            Hórario de funcionamento: 08:00 às 19:00 de terça à quarta <br/>
            08:00 às 21:00 de quinta à sabado
          </h2>
        </div>

        <div>
          <h2 className=" text-[28px] transition-all hover:transform-[scale(1.2)] ">
          conheca nosso instagram, e se tiver alguma dúvida chama no whatsApp
          </h2>
        </div>

        <div
          className="flex gap-8"
        >
          <Instagram />
          <WhatsApp />
        </div>

        <Buttom />

      </div>

    </section>
  );
};

// bg-[url(https://s3-alpha-sig.figma.com/img/a6d6/0d63/65ff1a8d2c495d2648ad67e067ef5b70?Expires=1695600000&Signature=DfoASvvfQDWz8~ayqhxXpvp93dGWkwPkgwKhWmi-rNtdzLfbAm9Iz2Jk3Cy91Xb7-NWWCeUEVfp9TYIby-Ou-nZxtQuleLQ~CN95EH5SVKnz-WtW-iz988gAjS2FQfHgBRXjQnqTbuef3ldMBTAPTSSBxL20Q7NuLhRiGCtKkK2KmjA5HeNA7CZ3fqSEDGnsxB3Jk6vb4K2O9MjYBapZ9-0tBY6XyQLjf-snIC1QcB~ZY5JN2S1citOoJ~xROJioS2j0F546ICkYQWH-R8j40Y0TuHztGZhd0ZngfwnadayCoprqjdGspjr0fSeh6wmofuyMHher9ic7fpTKiJdNoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)]
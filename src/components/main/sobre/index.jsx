import Image from 'next/image';
import imagemSobre1 from '../../../../public/imagem-sobre-1.png';
import imagemSobre2 from '../../../../public/imagem-sobre-2.png';
import imagemSobre3 from '../../../../public/imagem-sobre-3.png';
export default function Sobre() {
  return (
    <section className=" bg-azulEscuro px-4 py-8 " >
      <div className='flex justify-center relative' >
        <Image
          alt="barbearia"
          className="w-[300px] rotate-3 md:absolute md:w-[350px] md:z-10 md:top-14 rounded-lg md:-rotate-6 md:translate-x-[-45%] lg:translate-x-[-80%] lg:w-[350px] "
          src={imagemSobre1}
          loading="lazy"
        />

        <Image
          alt="barbearia"
          className=" w-[300px] hidden lg:inline md:w-[250px] absolute rounded-lg z-[5] "
          src={imagemSobre3}
          loading="lazy"
        />

        <Image
          alt="barbearia"
          className=" w-full hidden md:inline md:w-[250px] absolute rounded-lg md:rotate-6 md:translate-x-[45%] lg:translate-x-[95%] "
          src={imagemSobre2}
          loading="lazy"
        />

      </div>

      <h2 className='text-white text-[40px] text-center font-bold md:pt-72 ' >
        Sobre
      </h2>

      <p className='text-white text-center md:p-8 md:px-20 ' >
        Lorem ipsum dolor sit amet consectetur. Sed vitae egestas risus in eleifend porttitor nam. Amet ut dictumst commodo aliquam eget augue at mi. Commodo sollicitudin ultrices ut nulla venenatis quam at.
      </p>
    </section>
  );
};
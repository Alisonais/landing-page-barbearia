export default function Adress() {
  return (
    <section
      className="bg-white w-full h-[300px] "
    >
      <div
        className="text-azulEscuro text-[40px] font-bold text-center p-4 "
      >
        Nosso Endereço
      </div>
      <div
        className="w-full h-[350px] flex justify-center md:h-[550px] lg:h-[750px] "
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.206262605374!2d-45.78926092527959!3d-23.199152548384074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4d5a6e1a3419%3A0xbcf42eddef084adc!2sCosta%20Barber%20Shop!5e0!3m2!1spt-BR!2sbr!4v1696210797251!5m2!1spt-BR!2sbr"
          className="h-[300px] w-[400px] block md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] rounded-2xl "
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};
import Image from "next/image";
import logo from '../../../../../public/costa-barbearia.webp';

export default function Logo() {
  const className = " w-40 h-40 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-[32px] shadow-[0_0_19px_0_white] "

  return (
    <div
      className="flex justify-center"
    >
        <a href="#">
          <Image
            src={logo}
            alt="logo"
            className={className}
          /> 
        </a>
      </div>
  );
};
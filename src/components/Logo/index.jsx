import Image from "next/image";
import logo from "../../../public/costa-barbearia.png";

export default function Logo() {
  const className = " w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-md  "

  return (
    <div>
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
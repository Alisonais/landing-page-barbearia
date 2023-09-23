import Image from "next/image";
import logo from "../../../public/costa-barbearia.png";

export default function Logo() {
  // absolute max-[425px]:rounded-md max-[768px]:h-[100px] max-[768px]:w-[100px] max-[768px]:rounded-xl max-[768px]:relative
  
  const className = " w-[100px] h-[100px] rounded-md  "


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
import Image from "next/image";
import logo from "../../../public/costa-barbearia.png";

export default function Logo() {
  return (
    <div className="h-[200px] w-[220px] absolute top-[16px] right-[50%] translate-x-[50%]">
        <a href="#">
          <Image
            src={logo}
            alt="logo"
            className=" h-[200px] w-[220px] animate-shadowAnime rounded-[40px] "
          /> 
        </a>
      </div>
  );
};
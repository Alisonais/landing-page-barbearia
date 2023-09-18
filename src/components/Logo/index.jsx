import Image from "next/image";
import logo from "../../../public/costa-barbearia.png";

export default function Logo() {
  return (
    <div className="h-[200px] w-[220px] absolute top-[16px] right-[50%] translate-x-[50%]">
        <a href="#">
          <Image
            src={logo}
            alt="logo"
            className=" h-[200px] w-[220px] shadow-[0_0_10px_5px_rgb(253,253,253)] rounded-[40px] hover:animate-shadowAnime"
          /> 
        </a>
      </div>
  );
};
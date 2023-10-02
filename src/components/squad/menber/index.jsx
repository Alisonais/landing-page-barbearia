import { backgroundCta } from "@/components/utils/imageLinks";
import LogoInsta from "../logoInsta";

export default function Member() {
  return (
    <div>
      <div
        className="h-[300px] w-[250px] rounded-2xl "
        style={{
          backgroundImage: `url(${backgroundCta})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom'
        }}
      >
        <div 
        className="h-full w-full rounded-2xl flex items-end justify-center " 
        style={{
          background:'linear-gradient(344deg, black 5%, transparent 50%)'
        }}
        >
          <h3 className="text-bgButton font-bold p-4 ">Bruno</h3>
        </div>

      </div>

      <div
        className="p-2 flex justify-center hover:scale-110 transition-all ease-in-out duration-500"
      >
        <LogoInsta />
      </div>
    </div>
  );
};
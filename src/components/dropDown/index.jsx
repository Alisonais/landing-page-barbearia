
export default function DropDown() {
  return (

    <div className="md:hidden">
      <button className="peer relative group">
        <div className="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-bgButton group-focus:bg-bgButtomHover duration-200 ">
          <div className="transform transition-all duration-150 overflow-hidden -translate-y-5 group-focus:translate-y-3 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6h-6 w-6 animate-bounce stroke-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
            <div className="bg-black mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>
            <div className="bg-black mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
            <div className="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
          </div>
        </div>
      </button>
      <div className=" after:bg-background w-0 absolute top-5 right-[64px] z-10
		after:content-[''] after:inline-block after:absolute after:top-0 after:w-[100px] after:h-full after:-z-20 after:rounded-lg peer-focus:top-[100px] peer-focus:opacity-100 peer-focus:visible transition-all duration-300 invisible  opacity-0 flex flex-col items-center ">
        <ul className="text-white" >
          <li>Sobre</li>
          <li>Serviço</li>
          <li>Equipe</li>
        </ul>
      </div>
    </div>
  );
};


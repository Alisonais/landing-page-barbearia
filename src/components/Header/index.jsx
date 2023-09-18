import Button from '../Button';
import Logo from '../Logo';


export default function Header() {
  return (
    <header className="bg-background w-[1440px] px-[64px] py-4 flex justify-between items-center relative" >
      
      <Logo className="absolute" />

      <div>
        <ul className="flex gap-[64px] text-white text-2xl ">
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Equipe</a></li>
        </ul>
      </div>

      <Button />
    </header>
  );
};
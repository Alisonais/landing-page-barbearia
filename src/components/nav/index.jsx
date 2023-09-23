export default function Nav() {

  const className = " flex gap-[64px] text-white text-2xl max-[767px]:hidden "

  return (
    <div>
        <ul className={className}>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Equipe</a></li>
        </ul>
      </div>
  );
};
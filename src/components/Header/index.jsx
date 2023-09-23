'use client'
import Button from '../Button';
import Logo from '../Logo';
import DropDown from '../dropDown';
import Nav from '../nav';

export default function Header() {
    const styleHeader = "bg-background  px-[64px] py-4 flex justify-between items-center relative max-[768px]:px-4 ";
  return (
    <header className={styleHeader} >

      <Logo />

      <Nav />

      <Button content="Agendar Horario" />

      <DropDown />

    </header>
  );
};
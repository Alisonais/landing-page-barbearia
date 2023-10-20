import dynamic from "next/dynamic";
import Cta from "../main/cta";
const DynamicAdress = dynamic (() => import("../adress"));
const DynamicFooter = dynamic (() => import("../footer"));
const DynamicSquad = dynamic (() => import("../squad"));
const DynamicService = dynamic (() => import("../main/servicos"));
const DynamicAbout = dynamic (() => import("../main/sobre"));

export default function Main() {
  return (
    <>
      <Cta />
      <DynamicAbout />
      <DynamicService />
      <DynamicSquad />
      <DynamicAdress />
      <DynamicFooter/>
    </>
  );
};
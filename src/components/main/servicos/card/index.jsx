"use client"
import { backgroundlinearServicosPreco } from "@/components/utils/imageLinks";

export default function Card({ img, title, subtitle, price, handle }) {

  const formatPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return (
    <div
      className=" bg-white w-80 h-[460px] p-2 rounded-2xl flex flex-col gap-2 cursor-pointer 
      hover:scale-105 transition-all ease-in-out duration-500 "
      onClick={handle}
      style={{
        ":hover": {
          "background-color": "rgba(0, 0, 0, 0.5)",
          "filter": "blur(5px)",
        },
      }}
    >
      <div style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
        className="h-full rounded-2xl"
      />
      <div
        className="flex items-center justify-around p-2 rounded-b-xl"
        style={{
          background: `${backgroundlinearServicosPreco}`
        }}
      >
        <h2 className="font-bold text-[18px] p-1" >
          {title} 
          <br/>
          {subtitle}
        </h2>
        <h2 className="bg-black text-white p-2 rounded-lg " >
          {formatPrice}
        </h2>
      </div>
    </div>
  );
};
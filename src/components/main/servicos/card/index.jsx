import { backgroundlinearServicosPreco } from "@/components/utils/imageLinks";

export default function Card({img, title, price}) {

  const formatPrice = price.toLocaleString('pt-BR', {
    style:'currency',
    currency:'BRL',
    minimumFractionDigits: 2,
  });

  return(
    <div className=" bg-white w-80 h-80 p-2 rounded-2xl flex flex-col gap-2 " >
      <div style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      }}
      className="h-full rounded-2xl"
      />
      <div
        className="flex items-center justify-around p-2 rounded-b-xl"
        style={{
          background: `${backgroundlinearServicosPreco}`
        }}
      >
        <h2 className=" font-bold text-[18px] p-1" >
          {title}
        </h2>
        <h2 className="bg-black text-white p-2 rounded-lg " >
          {formatPrice}
        </h2>
      </div>
    </div>
  );
};
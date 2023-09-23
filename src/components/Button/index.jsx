'use client'
import React,{ useNavigate } from 'react';



export default function Buttom({content}) {
  const className = " bg-bgButton max-[425px]:px-[10px] text-black px-[95px] py-[10px] rounded-lg text-xl hover:bg-bgButtomHover  ease-in-out duration-500 transition-all max-[768px]:px-[10px] "

  function toogleSchedule() {
   window.open('https://costabarbershop.youcanbook.me/');
  };

  return (
    <button
      className={className}
      onClick={toogleSchedule}
    >
      {content}
    </button>
  );
};
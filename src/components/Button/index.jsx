'use client'
import React,{ useNavigate } from 'react';



export default function Buttom() {

  function toogleSchedule() {
   window.open('https://costabarbershop.youcanbook.me/');
  };

  return (
    <button
      className="bg-bgButton text-black px-[95px] py-[10px] rounded-lg text-xl hover:bg-bgButtomHover  ease-in-out duration-500 transition-all "
      onClick={toogleSchedule}
    >
      Agendar horário
    </button>
  );
};
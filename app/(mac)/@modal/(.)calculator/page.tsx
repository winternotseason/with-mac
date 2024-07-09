import MacHeader from "@/app/_component/mac-header";
import React from "react";

const Modal = () => {
  return (
    <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-96 bg-stone-700/90 rounded-2xl shadow-3xl overflow-hidden">
      <MacHeader />
      <div className="grow w-full grid grid-cols-4 ">
        <div className="flex justify-end items-center text-6xl text-white col-span-4 mr-4 font-extralight">0</div>
        <button className="bg-white/10 text-white text-xl">AC</button>
        <button className="bg-white/10 text-white text-xl">+/-</button>
        <button className="bg-white/10 text-white text-xl">%</button>
        <button className="bg-cal-yellow text-white text-xl">÷</button>
        <button className="bg-white/20 text-white text-xl">7</button>
        <button className="bg-white/20 text-white text-xl">8</button>
        <button className="bg-white/20 text-white text-xl">9</button>
        <button className="bg-cal-yellow text-white text-xl">x</button>
        <button className="bg-white/20 text-white text-xl">4</button>
        <button className="bg-white/20 text-white text-xl">5</button>
        <button className="bg-white/20 text-white text-xl">6</button>
        <button className="bg-cal-yellow text-white text-xl">-</button>
        <button className="bg-white/20 text-white text-xl">1</button>
        <button className="bg-white/20 text-white text-xl">2</button>
        <button className="bg-white/20 text-white text-xl">3</button>
        <button className="bg-cal-yellow text-white text-xl">+</button>
        <button className="col-span-2 bg-white/20 text-white text-xl">0</button>
        <button className="bg-white/20 text-white text-xl">.</button>
        <button className="bg-cal-yellow text-white text-xl">=</button>
      </div>
    </div>
  );
};

export default Modal;

"use client";

import MacHeader from "@/app/_component/mac-header";
import React, { useState } from "react";

const Modal = () => {
  const [display, setDisplay] = useState("0");
  const [onOperator, setOnOperator] = useState(false);

  /* 연산자 버튼을 누른 상태에서 다른 버튼을 누르면 => display가 누른 번호로 아예 바뀜 
  연산자 버튼을 누른 상태가 아니라면? 기본적으로 display가 바뀜. 숫자가 뒤에 추가되는. */
  const handleClickNumber = (value: string) => {
    if (onOperator) {
      // 연산자 버튼을 누르고 숫자를 누른 경우
      setDisplay(value);
      setOnOperator(false)
    } else {
      setDisplay(display === "0" ? value : display + value);
    }
  };

  const handleClickOperator = () => {
    setOnOperator(true);
  };

  return (
    <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-96 bg-stone-700/90 rounded-2xl shadow-3xl overflow-hidden">
      <MacHeader />
      <div className="grow w-full grid grid-cols-4 ">
        <div className="flex justify-end items-center text-6xl text-white col-span-4 mr-4 font-extralight">
          {display}
        </div>
        <button
          className="bg-white/10 text-white text-xl"
          onClick={() => {
            setDisplay("0");
          }}
        >
          {display === "0" ? "AC" : "C"}
        </button>
        <button className="bg-white/10 text-white text-xl">+/-</button>
        <button className="bg-white/10 text-white text-xl">%</button>
        <button
          className="bg-cal-yellow text-white text-xl"
          onClick={handleClickOperator}
        >
          ÷
        </button>
        <button
          className="bg-white/20 text-white text-xl"
          onClick={() => {
            handleClickNumber("7");
          }}
        >
          7
        </button>
        <button
          className="bg-white/20 text-white text-xl"
          onClick={() => {
            handleClickNumber("8");
          }}
        >
          8
        </button>
        <button
          className="bg-white/20 text-white text-xl"
          onClick={() => {
            handleClickNumber("9");
          }}
        >
          9
        </button>
        <button
          className="bg-cal-yellow text-white text-xl"
          onClick={handleClickOperator}
        >
          x
        </button>
        <button
          className="bg-white/20 text-white text-xl"
          onClick={() => {
            handleClickNumber("4");
          }}
        >
          4
        </button>
        <button
          className="bg-white/20 text-white text-xl"
          onClick={() => {
            handleClickNumber("5");
          }}
        >
          5
        </button>
        <button
          className="bg-white/20 text-white text-xl"
          onClick={() => {
            handleClickNumber("6");
          }}
        >
          6
        </button>
        <button
          className="bg-cal-yellow text-white text-xl"
          onClick={handleClickOperator}
        >
          -
        </button>
        <button
          className="bg-white/20 text-white text-xl"
          onClick={() => {
            handleClickNumber("1");
          }}
        >
          1
        </button>
        <button
          className="bg-white/20 text-white text-xl"
          onClick={() => {
            handleClickNumber("2");
          }}
        >
          2
        </button>
        <button
          className="bg-white/20 text-white text-xl"
          onClick={() => {
            handleClickNumber("3");
          }}
        >
          3
        </button>
        <button
          className="bg-cal-yellow text-white text-xl"
          onClick={handleClickOperator}
        >
          +
        </button>
        <button className="col-span-2 bg-white/20 text-white text-xl">0</button>
        <button className="bg-white/20 text-white text-xl">.</button>
        <button className="bg-cal-yellow text-white text-xl">=</button>
      </div>
    </div>
  );
};

export default Modal;

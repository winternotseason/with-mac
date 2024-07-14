"use client";

import MacHeader from "@/app/_component/mac-header";
import React, { useEffect, useState } from "react";

const Modal = () => {
  const [display, setDisplay] = useState("0");
  const [prevNumber, setPrevNumber] = useState<null | number>(null);
  const [operator, setOperator] = useState<null | string>(null);
  const [onOperator, setOnOperator] = useState(false);
  const [displayFontSize, setDisplayFontSize] = useState<string>("6xl");

  /* 연산자 버튼을 누른 상태에서 다른 버튼을 누르면 => display가 누른 번호로 아예 바뀜 
  연산자 버튼을 누른 상태가 아니라면? 기본적으로 display가 바뀜. 숫자가 뒤에 추가되는. */
  useEffect(() => {
    if (display.length > 7) {
      // 8,9,10 ...
      setDisplayFontSize("3xl");
    }
    if (display.length < 8) {
      setDisplayFontSize("6xl");
    } // 7,6,5..
  }, [display, setDisplayFontSize]);

  const handleClickNumber = (value: string) => {
    if (onOperator) {
      // 연산자 버튼을 누르고 숫자를 누른 경우
      setDisplay(value);
      setOnOperator(false);
    } else {
      setDisplay(display === "0" ? value : display + value);
    }
  };

  const handleClickOperator = (operator: string) => {
    if (prevNumber === null) {
      setPrevNumber(parseFloat(display));
    } else if (operator) {
      const result = handleOperation();
      setDisplay(String(result));
      if (result === undefined) return;
      setPrevNumber(result);
    }
    setOperator(operator);
    setOnOperator(true);
  };

  const handleOperation = () => {
    const currentNumber = parseFloat(display);
    if (!prevNumber) return;
    if (operator === "+") return prevNumber + currentNumber;
    if (operator === "-") return prevNumber - currentNumber;
    if (operator === "x") return prevNumber * currentNumber;
    if (operator === "÷") return prevNumber / currentNumber;
  };

  const handleClickEqual = () => {
    // 연산자, 이전 숫자가 모두 설정되어있을때 결과를 display 해줘야함
    if (operator && prevNumber !== null) {
      const result = handleOperation();
      setDisplay(String(result));
      setPrevNumber(null);
      setOperator(null);
      setOnOperator(false);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPrevNumber(null);
    setOperator(null);
    setOnOperator(false);
  };

  const handleSignChangeClick = () => {
    setDisplay((prev) => String(parseFloat(prev) * -1));
  };

  const handlePercentageClick = () => {
    setDisplay((prev) => String(parseFloat(prev) / 100));
  };
  
  const handleClickDot = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  }
  
  return (
    <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-96 bg-stone-700/90 rounded-2xl shadow-3xl overflow-hidden">
      <MacHeader />
      <div className="grow w-full h-20rem grid grid-cols-4 pt-10 overflow-hidden">
        <div
          className={`flex justify-end items-end h-16 text-${displayFontSize} text-white col-span-4 px-4 font-extralight `}
        >
          {display}
        </div>
        <button
          className="bg-white/10 text-white text-xl"
          onClick={handleClear}
        >
          {display === "0" ? "AC" : "C"}
        </button>
        <button
          className="bg-white/10 text-white text-xl"
          onClick={handleSignChangeClick}
        >
          +/-
        </button>
        <button
          className="bg-white/10 text-white text-xl"
          onClick={handlePercentageClick}
        >
          %
        </button>
        <button
          className="bg-cal-yellow text-white text-xl"
          onClick={() => {
            handleClickOperator("÷");
          }}
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
          onClick={() => {
            handleClickOperator("x");
          }}
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
          onClick={() => {
            handleClickOperator("-");
          }}
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
          onClick={() => {
            handleClickOperator("+");
          }}
        >
          +
        </button>
        <button
          className="col-span-2 bg-white/20 text-white text-xl"
          onClick={() => handleClickNumber("0")}
        >
          0
        </button>
        <button className="bg-white/20 text-white text-xl" onClick={handleClickDot}>.</button>
        <button
          className="bg-cal-yellow text-white text-xl"
          onClick={handleClickEqual}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Modal;

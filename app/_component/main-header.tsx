import Image from "next/image";
import React from "react";

const MainHeader = () => {
  return (
    <div className="absolute top-0 w-full px-2 py-1 bg-slate-600/30">
      <ul className="flex flex-row items-center text-white text-xs font-semibold gap-4">
        <li className="mb-[0.15rem]">
          <Image src="/applelogo.png" alt="apple logo" width={13} height={13} />
        </li>
        <li>FINDER</li>
        <li>파일</li>
        <li>편집</li>
        <li>보기</li>
        <li>이동</li>
        <li>윈도우</li>
        <li>도움말</li>
      </ul>
    </div>
  );
};

export default MainHeader;

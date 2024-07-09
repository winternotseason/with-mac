import React from "react";

const MainNav = () => {
  return (
    <div className="flex items-center m-2 px-4 pb-1 absolute left-1/2 bottom-0 -translate-x-1/2 bg-white/40 rounded-3xl">
      <div className="w-20 h-20 rounded-2xl bg-calculator bg-cover cursor-pointer" />
      <div className="w-20 h-20 rounded-2xl bg-calendar bg-cover ml-1 cursor-pointer" />
      <div className="w-20 h-20 rounded-2xl bg-vscode bg-cover ml-1 cursor-pointer" />
      <div className="w-20 h-20 rounded-2xl bg-melon bg-cover ml-1 cursor-pointer" />
      <div className="w-20 h-20 rounded-2xl bg-kakao bg-cover ml-1 cursor-pointer" />
      <div className="w-20 h-20 rounded-2xl bg-mongo bg-cover ml-1 cursor-pointer" />
      <div className="w-20 h-20 rounded-2xl bg-safari bg-cover ml-1 cursor-pointer" />
    </div>
  );
};

export default MainNav;

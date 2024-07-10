"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AppIcon {
  src: string;
  name: string;
}

const AppIcon = ({ src, name }: AppIcon) => {
  const router = useRouter();
  const extractFileName = (path: string) => {
    const match = path.match(/\/(.*?)\./);
    return match ? match[1] : null;
  };
  return (
    <div
      className="flex flex-col justify-center items-center w-24 h-28"
      onClick={() => {
        if (name === "github") {
          window.open("https://github.com/winternotseason", "_blank");
        } else if(name === "블로그") {
          window.open("https://seodevelopment.tistory.com/", "_blank");
        }else {
          router.push(`/${extractFileName(src)}`);
        }
      }}
    >
      <div className="bg-red w-20 h-20 relative">
        <Image src={src} alt={name} fill />
      </div>
      <p className="text-xs font-bold text-white shadow-xl">{name}</p>
    </div>
  );
};

export default AppIcon;

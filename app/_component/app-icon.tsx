import React from "react";
import Image from "next/image";

interface AppIcon {
  src: string;
  name: string;
}

const AppIcon = ({ src, name }: AppIcon) => {
  return (
    <div className="flex flex-col justify-center items-center w-24 h-28">
      <div className="bg-red w-20 h-20 relative">
        <Image src={src} alt={name} fill />
      </div>
      <p className="text-xs font-bold text-white shadow-xl">{name}</p>
    </div>
  );
};

export default AppIcon;

"use client";

import React from "react";
import { useRouter } from "next/navigation";

const MacHeader = () => {
  const router = useRouter();
  return (
    <div className="absolute top-4 left-2 flex justify-start items-center">
      <div
        className="w-3 h-3 rounded-full bg-mac-red ml-2"
        onClick={() => {
          router.back();
        }}
      />
      <div className="w-3 h-3 rounded-full bg-mac-yellow ml-2" />
      <div className="w-3 h-3 rounded-full bg-mac-green ml-2" />
    </div>
  );
};

export default MacHeader;

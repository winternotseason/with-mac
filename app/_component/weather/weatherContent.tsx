import React from "react";

const WeatherContent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-10 pl-52 pb-10 text-3xl text-white font-thin bg-Thunderstorm bg-cover">
      <p className="text-4xl">Seoul</p>
      <p className="text-base mb-2">kr</p>
      <p className="text-5xl">23°</p>
      <p className="text-base">부분적으로 흐림</p>
      <div className="w-32 text-base flex justify-between">
        <p>최고:30°</p>
        <p>최저:20°</p>
      </div>
    </div>
  );
};

export default WeatherContent;

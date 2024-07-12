"use client";

import React from "react";
import { WeatherApi } from "@/app/services/weatherApi";
import { useStore } from "@/app/store/weatherStore";
import { useEffect } from "react";

const WeatherBar = () => {
  const weathers = useStore((state) => state.datas);
  const cleanData = useStore.getState().cleanData;

  useEffect(() => {
    console.log("호출?");
    WeatherApi();
    return () => {
      cleanData();
    };
  }, [cleanData]);
  console.log(weathers);
  return (
    <>
      {weathers.length === 0 ? (
        <div className="absolute left-0">Loading...</div>
      ) : (
        <ul className="absolute left-0 w-52 h-full pt-10 bg-black/30">
          {weathers.map((city) => (
            <li
              key={city.name}
              className="flex flex-col justify-between w-full h-24 py-3 border-b-[1px] px-4 border-gray-700 hover:bg-white/20"
            >
              <div className="w-full flex justify-between">
                <div>
                  <p className="font-semibold text-white">{city.name}</p>
                  <p className="text-xs text-light-gray">{city.country}</p>
                </div>
                <div className="font-thin text-3xl text-light-gray">{city.temp.slice(0,2)}°</div>
              </div>
              <div className="flex justify-between text-xs text-light-gray">
                <div>{city.description}</div>
                <div>
                  최고:{city.temp_max.slice(0, 2)}° 최저:
                  {city.temp_min.slice(0, 2)}°
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default WeatherBar;

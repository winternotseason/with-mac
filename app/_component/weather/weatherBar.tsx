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
        <div>Loading...</div>
      ) : (
        <ul className="w-52 h-full  p-4 space-y-4 bg-navy">
          {weathers.map((city) => (
            <li
              key={city.name}
              className="flex flex-col justify-between w-full h-20 pb-3 border-b-[1px] border-gray-700"
            >
              <div className="w-full flex justify-between">
                <div>
                  <p className="font-semibold text-white">{city.name}</p>
                  <p className="text-xs text-light-gray">{city.country}</p>
                </div>
                <div className="font-thin text-3xl text-light-gray">{city.temp}°</div>
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

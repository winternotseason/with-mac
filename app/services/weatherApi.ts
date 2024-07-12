"use client";

import axios from "axios";
import { useStore } from "../store/weatherStore";

export const WeatherApi = async () => {
  console.log("WeatherApi called");
  const pushData = useStore.getState().pushData;
  const cities = ["seoul", "tokyo", "new york", "london", "paris"];

  const requests = cities.map((city) =>
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&lang=kr&units=metric`
    )
  );

  const responses = await Promise.all(requests);

  responses.forEach((response) => {
    const data = response.data;
    pushData({
      name: data.name,
      country: data.sys.country,
      temp: data.main.temp.toString(),
      temp_max: data.main.temp_max.toString(),
      temp_min: data.main.temp_min.toString(),
      description: data.weather[0].description,
      weather_id: data.weather[0].id,
    });
  });
};

/*name: string;
country: string;
temp: string;
temp_max: string;
temp_min: string;
description: string;
weather_id: number;*/

"use client";

import axios from "axios";
import { useStore } from "../store/weatherStore";

export const WeatherApi = async () => {
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
    let weather = "";
    switch (Math.floor(data.weather[0].id / 100)) {
      case 2:
        weather = "Thunderstorm";
        break;
      case 3:
        weather = "Drizzle";
        break;
      case 5:
        weather = "Rain";
        break;
      case 6:
        weather = "Snow";
        break;
      case 7:
        weather = "Atmosphere";
        break;
      case 8:
        if (data.weather[0].id === 800) {
          weather = "Clear";
        } else {
          weather = "Clouds";
        }
        break;
      default:
        weather = "Unknown";
    }
    pushData({
      name: data.name,
      country: data.sys.country,
      temp: data.main.temp.toString(),
      temp_max: data.main.temp_max.toString(),
      temp_min: data.main.temp_min.toString(),
      description: data.weather[0].description,
      weather,
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

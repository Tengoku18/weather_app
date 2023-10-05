import React from "react";
import { useContext, useState } from "react";
import { weatherContext } from "../App";
const Detail = () => {
  const { weatherData } = useContext(weatherContext);
  const [isCelcius, setIsCelcius] = useState(true);

  if (weatherData) {
    const { weather, main, coord, wind, name } = weatherData;
    const styleToggle = " text-white   rounded-full bg-slate-600 ";
    const celciusTemp = (main?.temp - 273).toFixed(2);
    const fahrenheitTemp = ((celciusTemp * 9) / 5 + 32).toFixed(2);
    return (
      <div className="flex flex-col p-5 gap-5  font-Poppins">
        <h1 className="text-center font-semibold text-2xl mt-4 text-white tracking-wider">
          Weather at {name} today.
        </h1>
        <div className="flex justify-center gap-5 h-full mt-5  ">
          <div className="flex h-60 bg-orange-300 rounded-md p-5">
            {/* Side Icon bar */}
            <div className="flex  flex-col">
              <h2 className=" text-xl text-gray-100 font-semibold tracking-wider text-center">
                {" "}
                {weatherData.weather[0].main}{" "}
              </h2>
              <img
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="weather icon"
              />
              <h2 className=" text-md text-white font-semibold tracking-wider text-center">
                {" "}
                {weather[0].description}{" "}
              </h2>
            </div>

            {/* Toggle button */}
            <div className=" relative h-full px-3 flex items-center">
              <div className="absolute top-0 cursor-pointer right-2 flex gap-1 bg-white px-1 rounded-full py-0.5">
                <p
                  className={`text-xs py-1 px-2 ${isCelcius && styleToggle} `}
                  onClick={() => setIsCelcius((pre) => !pre)}
                >
                  C
                </p>
                <p
                  className={`text-xs py-1 px-2 ${!isCelcius && styleToggle} `}
                  onClick={() => setIsCelcius((pre) => !pre)}
                >
                  F
                </p>
              </div>

              <h1 className=" relative text-4xl   text-white">
                {isCelcius ? celciusTemp : fahrenheitTemp}
                <sup className=" absolute text-sm  -right-3 ml-1">0 </sup>
              </h1>
              <span className=" font-Poppins text-white text-3xl ml-4">
                {" "}
                {` ${isCelcius ? "C" : "F"} `}
              </span>
            </div>
          </div>

          <div className="flex  bg-orange-300 rounded-md py-5 px-10">
            <div className="flex flex-col">
              <h1 className="text-md tracking-wider font-semibold text-gray-100">
                Wind
              </h1>
              <ul className="text-md space-y-1 text-white">
                <li>speed : {wind.speed}</li>
                <li>Degree : {wind.deg} </li>
                <li>Gust : {wind.gust} </li>
              </ul>

              <h1 className="text-md mt-3 tracking-wider font-semibold text-gray-100">
                Co-ordinates
              </h1>
              <ul className="text-md space-y-1 text-white">
                <li>Longitude : {coord.lon} </li>
                <li>Latitude : {coord.lat}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Detail;

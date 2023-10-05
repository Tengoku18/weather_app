import React from "react";
import Form from "./components/Form";
import Detail from "./components/Detail";
import { useContext } from "react";
import { WeatherContext } from "./App";

const Home = () => {
  const { weatherData } = useContext(WeatherContext);
  return (
    <div className=" relative h-screen w-screen bg-center bg-no-repeat">
      <div className="absolute inset-y-0 -z-10  h-full w-full bg-black opacity-10" />

      <img
        src="/sky.jpg"
        className="-z-20 absolute top-0 h-full w-full"
        alt="Sky"
      />
      <div className="flex  justify-center items-end h-1/5 text-white font-Sofia tracking-widest">
        <div className="flex flex-col">
          <h1 className="  font-normal text-5xl md:text-6xl"> Weather Today</h1>
          <h3 className=" text-md md:text-lg w-full text-center">
            {" "}
            Get weather information in seconds{" "}
          </h3>
        </div>
      </div>

      <div className="my-20 flex w-full  justify-center">
        <Form />
      </div>

      {weatherData && (
        <div className="max-w-7xl bg-[#99B8BD] mx-auto h-fit  rounded-md  ">
          {typeof weatherData === "object" ? (
            <Detail weatherData={weatherData} />
          ) : (
            <div className="grid place-content-center w-full h-full text-4xl font-semibold text-white font-Poppins">
              {" "}
              <h1 className="tracking-wider"> {weatherData}!!</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

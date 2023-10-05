import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { WeatherContext } from "../App";
import Spinner from "./Spinner";
const Form = () => {
  const [inputText, setInputtext] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setWeatherData } = useContext(WeatherContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${process.env.REACT_APP_WEATHERAPI_ID}`
      )
      .then((res) => {
        setWeatherData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setWeatherData(err?.response?.data?.message);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="font-Poppins">
        <input
          className="pl-5 h-10 w-60 md:w-96 mr-2 md:mr-4 rounded-full outline-none"
          placeholder="Enter your city name"
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputtext(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          className=" px-5 rounded-full py-2 bg-slate-600 text-white"
        >
          {isLoading ? <Spinner /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;

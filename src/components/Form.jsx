import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { weatherContext } from "../App";
const Form = () => {
  const [inputText, setInputtext] = useState("");

  const { setWeatherData } = useContext(weatherContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I am console", inputText);

    try {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=45b661938ac147c3de8713daeda7ea42`
        )
        .then((res) => {
          setWeatherData(res.data);
        })
        .catch((err) => {
          console.log("Error while processing request.", err);
        });
    } catch (e) {
      console.log("Error while processing request.", e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="font-Poppins">
        <input
          className="pl-5 h-10 w-96 mr-4 rounded-full outline-none"
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
          className=" px-5 rounded-full py-2 bg-black text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

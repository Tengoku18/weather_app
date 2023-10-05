import Home from "./Home";
import { createContext, useState } from "react";

export const WeatherContext = createContext(null);

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      <Home />
    </WeatherContext.Provider>
  );
}

export default App;

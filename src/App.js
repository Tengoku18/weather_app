import Home from "./Home";
import { createContext, useState } from "react";

export const weatherContext = createContext(null);

function App() {
  const [weatherData, setWeatherData] = useState(null);
  console.log("weather data", weatherData);
  return (
    <weatherContext.Provider value={{ weatherData, setWeatherData }}>
      <Home />
    </weatherContext.Provider>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import Search from "./components/Search";
import Result from "./components/Result";



function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <div className="Container">
      <h1 className="AppLabel">Find Weather Of The City</h1>
      {city && weather ? (
        <Result weather={weather} city={city} />
      ) : (
        <Search updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </div>
  );
}

export default App;

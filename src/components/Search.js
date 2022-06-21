import React from "react";
import "./Search.css"
import logo from "./logo.png";

const Search = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <img className="WelcomeWeatherLogo" src={logo} alt="logo" />
      <h2 className="ChooseCityLabel">Enter the city name</h2>
      <form className="SearchBox" onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </form>
    </>
  );
};
export default Search;

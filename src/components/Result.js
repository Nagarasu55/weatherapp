import React from "react";
import "./Result.css";


const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <div className="InfoContainer">
            <span className="InfoLabel">
                {value}
                <span>{name}</span>
            </span>
        </div>
    );
};
const Result = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
            <div className="WeatherContainer" >
                <span className="Condition">
                    <span style={{ fontSize:18}}>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                </span>
            </div>
            <span className="Location">{`${weather?.name}, ${weather?.sys?.country}`}</span>

            <span className="WeatherInfoLabel">Weather Info</span>
            <div className="WeatherInfoContainer">
                <WeatherInfoComponent name={isDay ? "sunset Time" : "sunrise Time"}
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <WeatherInfoComponent name={"humidity-%"} value={weather?.main?.humidity}/>
                <WeatherInfoComponent name={"wind-km/h"} value={weather?.wind?.speed}/>
                <WeatherInfoComponent name={"pressure-Pa"} value={weather?.main?.pressure}/>
            </div>
        </>
    );
};

export default Result;

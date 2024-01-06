import React, { useState } from "react";
import Search from "./Search";
import "./Weather.css";
// import data from "../accordian/data";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  async function fetchWeatherData(param) {
    setLoading(true)
    try {
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=ac90dceabee97323a88981965455bf32`);
      const data = await resp.json()
      if(data){
        setLoading(false)
        setWeatherData(data)
      }
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSearch() {
  fetchWeatherData(search)
  }
  function getCurrentDate(){
    return new Date().toLocaleDateString('en-us',{
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
  }
  return (
    <div className="weather-app">
      <Search
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      {
        loading ? <div>Loading...........</div> : <div>
            <div className="city-name">
                <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
            </div>
            <div className="date">
                <span>{getCurrentDate()}</span>
            </div>
            <div className="temp">{weatherData?.main?.temp}</div>
            <p className="description">
                {
                    weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''
                }
            </p>
            <div className="weather-info">
                    <div>
                        <div>
                        <p className="wind">{weatherData?.wind?.speed}</p>
                        <p>Wind Speed</p>
                        </div>
                    </div>
                    <div>
                        <div>
                        <p className="humidity">{weatherData?.main?.humidity}</p>
                        <p>Humidity</p>
                        </div>
                    </div>
            </div>
        </div>
      }
 
    </div>
  );
};

export default Weather;

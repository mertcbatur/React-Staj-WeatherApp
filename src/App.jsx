import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import WeatherSearch from "./components/weather/WeatherSearch";
import WeatherDetail from "./components/weather/WeatherDetail";
import CurrentWeather from "./components/weather/CurrentWeather";
import axios from "axios";
import { currentWeatherAPI } from "./api/WeatherAPI";
import { useState } from "react";
import ForecastWeather from "./components/weather/ForecastWeather";

function App({ data, forecastData }) {
  const [curentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [uv, setUv] = useState(null);
  const handleLocationChange = async (searchValue) => {
    const [lat, lon] = searchValue.value.split("");

    const currentWeatherFetch = axios.get(
      `${currentWeatherAPI}weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WEATHER_API
      }&units=metric`
    );
    const forecastFetch = axios.get(
      `${currentWeatherAPI}forecast?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WEATHER_API
      }&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch,])
      .then(async (response) => {
        const weatherResponse = response[0].data;
        const forecastResponse = response[1].data;

        setCurrentWeather({ city: searchValue.label, ...weatherResponse });
        setForecast({ city: searchValue.label, ...forecastResponse });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(curentWeather);
  console.log(forecast);

  return (
    <>
      <Navbar />
      <div className="justify-center items-center  text-center flex flex-col">
        <Header />
        <WeatherSearch onSearchChange={handleLocationChange} />
        {curentWeather && <CurrentWeather data={curentWeather} uv={uv} />}
        {/* <ForecastWeather forecast={forecast} /> */}
      </div>
    </>
  );
}

export default App;

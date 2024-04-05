import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import WeatherSearch from "./components/weather/WeatherSearch";
import { Route, Routes } from "react-router-dom";
import WeatherDetail from "./components/weather/WeatherDetail";
import CurrentWeather from "./components/weather/CurrentWeather";

function App() {
  const handleLocationChange = async (searchValue) => {
    console.log(searchValue);
  };
  return (
    <>
      <Navbar />
      <div className="justify-center items-center  text-center flex flex-col overflow-y-hidden">
         <Header />
         <WeatherSearch onSearchChange={handleLocationChange} />
        <CurrentWeather />
      </div>
    </>
  );
}

export default App;

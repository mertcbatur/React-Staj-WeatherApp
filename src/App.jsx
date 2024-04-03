import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import WeatherSearch from "./components/weather/WeatherSearch";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import WeatherDetail from "./components/weather/WeatherDetail";

function App() {
  const handleLocationChange = async (searchValue) => {
    console.log(searchValue);
  };
  return (
    <>
      <Navbar />
      <div className="justify-center items-center text-center h-[90vh] flex flex-col overflow-y-hidden">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<WeatherSearch onSearchChange={handleLocationChange} />}
          />
          <Route path="/weather-detail/:name" element={<WeatherDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

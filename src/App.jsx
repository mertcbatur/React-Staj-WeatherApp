import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import WeatherSearch from "./components/weather/WeatherSearch";

function App() {
  return (
    <>
      <Navbar clas />
      <div className="justify-center items-center text-center h-[90vh] flex flex-col overflow-y-hidden">
        <Header />
        <WeatherSearch />
      </div>
    </>
  );
}

export default App;

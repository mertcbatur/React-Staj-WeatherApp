import React from "react";

export default function CurrentWeather({ data, uv}) {
  return (
    <>
      <div
        className="flex w-[90%] lg:w-[80%] rounded-lg lg:p-4 p-2"
        style={{
          backgroundImage: `url(WeatherBackgrounds/${data.weather[0].icon}.svg)`,
        }}
      >
        <div className="flex justify-between w-full ">
          <div className="text-white flex flex-col justify-between p-3 rounded-lg bg-cover bg-center bg-no-repeat w-full">
            <div className=" flex items-left">
              <div className="text-left">
                <p className="font-bold">{data.city}</p>
              </div>
            </div>

            <div className="flex text-left items-center justify-between ">
              <div className="flex flex-col flex-grow">
                <h1 className="text-3xl lg:text-6xl font-bold">
                  {Math.floor(data.main.temp).toString().substring(0, 2)}°C
                </h1>
                <span className="text-sm lg:text-lg">
                  H:{Math.floor(data.main.temp_max)}°C/L:
                  {Math.floor(data.main.temp_min)}°C
                </span>
                <span className="text-sm lg:text-lg">
                  {data.weather[0].description}
                </span>
              </div>

              <img
                src={`WeatherIcons/${data.weather[0].icon}.svg`}
                className="w-20 lg:w-40"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] flex max-sm:flex-col justify-between">
        <div className="mt-4 w-[100%]">
          <div className="p-4 border border-gray-600 bg-gray-700 rounded-lg text-white   ">
            <div className="flex justify-between items-center mb-1">
              <div className="flex justify-center items-center">
                <img
                  src="WeatherDetails/thermometer.svg"
                  alt=""
                  className="brightness-50"
                />
                <p className="text-white text-opacity-50">Thermal sensation</p>
              </div>
              <div>
                <p>{Math.floor(data.main.feels_like)}°C</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center my-1 ">
              <div className="flex justify-center items-center">
                <img
                  src="WeatherDetails/cloudRain.svg"
                  alt=""
                  className="brightness-50 w-7 mr-1.5"
                />
                <p className="text-white text-opacity-50">Probility of rain</p>
              </div>
              <div>
                <p>{data.rain}</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center my-1 ">
              <div className="flex justify-center items-center">
                <img
                  src="WeatherDetails/wind.svg"
                  alt=""
                  className="brightness-50"
                />
                <p className="text-white text-opacity-50">Wind speed</p>
              </div>
              <div>
                <p>{data.wind.speed} km/h</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center mb-1 ">
              <div className="flex justify-center items-center">
                <img
                  src="WeatherDetails/nem.svg"
                  alt=""
                  className="brightness-50"
                />
                <p className="text-white text-opacity-50">Air humidity</p>
              </div>
              <div>
                <p>{data.main.humidity}%</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

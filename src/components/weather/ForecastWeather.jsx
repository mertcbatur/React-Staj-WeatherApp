import React from "react";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function ForecastWeather({ forecast }) {
  const dayInWeek = new Date().getDay();
  const forecastDay = weekDays
    .slice(dayInWeek + 1, weekDays.length)
    .concat(weekDays.slice(0, dayInWeek));
  return (
    <>
      {console.log(forecast)}
      <div className="border border-gray-600 mt-4 p-4 ml-2 rounded-lg bg-gray-700 w-[90%] lg:w-[80%] flex max-sm:flex-col justify-between">
        <table className="table-auto">
          <thead className="mt-2 text-white">
            <tr>
              {forecastDay.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody className="items-center justify-center">
            <tr>
              <td>
                <img
                  src="WeatherIcons/geceFirtina.svg"
                  alt=""
                  className="w-[8rem]"
                />
              </td>
              <td>
                <img
                  src="WeatherIcons/geceFirtina.svg"
                  alt=""
                  className="w-[8rem]"
                />
              </td>
              <td>
                <img
                  src="WeatherIcons/geceFirtina.svg"
                  alt=""
                  className="w-[8rem]"
                />
              </td>
              <td>
                <img
                  src="WeatherIcons/geceFirtina.svg"
                  alt=""
                  className="w-[8rem]"
                />
              </td>
              <td>
                <img
                  src="WeatherIcons/geceFirtina.svg"
                  alt=""
                  className="w-[8rem]"
                />
              </td>
            </tr>
            <tr className="text-white">
              <td>32</td>
              <td>32</td>
              <td>32</td>
              <td>32</td>
              <td>32</td>
            </tr>
            <tr className="text-white text-opacity-40">
              <td>32</td>
              <td>32</td>
              <td>32</td>
              <td>32</td>
              <td>32</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

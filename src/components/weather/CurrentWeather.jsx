import React from "react";

export default function CurrentWeather() {
  return (
    <>
      <div
        className="flex w-[90%] lg:w-[80%] rounded-lg lg:p-4 p-2"
        style={{
          backgroundImage: 'url("WeatherBackgrounds/acikGeceBg.svg")',
        }}
      >
        <div className="flex justify-between w-full ">
          <div className="text-white flex flex-col justify-between p-3 rounded-lg bg-cover bg-center bg-no-repeat w-full">
            <div className=" flex items-left">
              <div className="text-left">
                <p className="font-bold">İstanbul,Tr</p>
                <span className="">Monday,May 15,2023</span>
              </div>
            </div>

            <div className="flex text-left items-center justify-between ">
              <div className="flex flex-col flex-grow">
                <h1 className="text-3xl lg:text-6xl font-bold">28°C</h1>
                <span className="text-sm lg:text-lg">26Derece/28Derece</span>
                <p>FewClouds</p>
              </div>

              <img src="WeatherIcons/geceAcik.svg" className="w-40" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] flex max-sm:flex-col justify-between">
        <div className="mt-4 w-[100%] lg:w-[35rem]">
          <div className="p-4 border border-gray-600 bg-gray-700 rounded-lg text-white   ">
            <div className="flex justify-between items-center mb-1">
              <div className="flex justify-center items-center">
                <img
                  src="WeatherDetails/thermometer.svg"
                  alt=""
                  className="brightness-50"
                />
                <p>Thermal sensation</p>
              </div>
              <div>
                <p>28°C</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center my-1 ">
              <div className="flex justify-center items-center">
                <img
                  src="WeatherDetails/thermometer.svg"
                  alt=""
                  className="brightness-50"
                />
                <p>Probility of rain</p>
              </div>
              <div>
                <p>28°C</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center my-1 ">
              <div className="flex justify-center items-center">
                <img
                  src="WeatherDetails/thermometer.svg"
                  alt=""
                  className="brightness-50"
                />
                <p>Thermal sensation</p>
              </div>
              <div>
                <p>28°C</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center mb-1 ">
              <div className="flex justify-center items-center">
                <img
                  src="WeatherDetails/thermometer.svg"
                  alt=""
                  className="brightness-50"
                />
                <p>Thermal sensation</p>
              </div>
              <div>
                <p>28°C</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-1 ">
              <div className="flex justify-center items-center">
                <img
                  src="WeatherDetails/thermometer.svg"
                  className=" brightness-50"
                  alt=""
                />
                <p>Thermal sensation</p>
              </div>
              <div>
                <p>28°C</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-600 mt-4 p-4 ml-2 rounded-lg bg-gray-700">
          <table class="table-auto">
            <thead className="mt-2 text-white">
              <tr>
                <th>Mon</th>
                <th>Mon</th>
                <th>Mon</th>
                <th>Mon</th>
                <th>Mon</th>
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
              <tr className="text-white text-opacity-4  0">
                <td>32</td>
                <td>32</td>
                <td>32</td>
                <td>32</td>
                <td>32</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function Header() {
  return (
    <div className="items-center justify-center tracking-wide text-gray-100 flex flex-col text-center m-2">
      <h1 className="text-2xl lg:text-3xl">
        Welcome To <span className="text-product-light">IWeather</span>
      </h1>
      <span className="my-3 text-zinc-500 text-sm">
        Choose a location to see the weather forecast
      </span>
    </div>
  );
}

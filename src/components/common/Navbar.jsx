import React from "react";
import appLogo from "../../assets/logo.svg";
export default function Navbar() {
  return (
    <>
      <div className="relative">
        <nav className="sticky top-4 max-sm:flex">
          <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 text-gray-100">
            <img src={appLogo} className="w-10" alt="" />
            <a href="">
              <h1 className="text-xl">IWeather</h1>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

import React from "react";
import appLogo from "../../assets/logo.svg";
export default function Navbar() {
  return (
    <nav className="sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 text-gray-100">
        <img src={appLogo} alt="" />
        <h1 className="text-center flex items-center">IWeather</h1>
      </div>
    </nav>
  );
}

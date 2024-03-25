import React, { useState } from "react";

export default function WeatherSearch() {
  const [search, setSearch] = useState(null);

  return (
    <>
      <div>
        <input
          type="text"
          className="rounded-lg py-2  px-8 bg-gray-700 "
          placeholder="Search location"
          value={search}
          load
        />
      </div>
    </>
  );
}

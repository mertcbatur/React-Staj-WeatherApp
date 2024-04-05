import axios from "axios";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoUrl, placesOptions } from "../../api/WeatherAPI";
import { colourStyles } from "../../styles/styles";

export default function WeatherSearch({ onSearchChange }) {
  const [search, setSearch] = useState(null);
  const handleLocaitonChange = (searchValue) => {
    setSearch(searchValue);
    onSearchChange(searchValue);
  };

  const loadOptions = async (inputValue) => {
    try {
      const response = await axios.get(`${geoUrl}/cities`, {
        params: {
          namePrefix: inputValue,
        },
        headers: placesOptions.headers,
      });

      return {
        options: response.data.data.map((city) => {
          return {
            value: `${city.latitude},${city.longitude}`,
            label: `${city.name},${city.region.substring(0, 5)}, ${
              city.countryCode
            }`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <AsyncPaginate
          placeholder="Search location"
          debounceTimeout={600}
          value={search}
          onChange={handleLocaitonChange}
          loadOptions={loadOptions} //For the autocomplete
          styles={colourStyles}
        />
      </div>
    </>
  );
}

export const geoUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const placesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_GEO_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
  },
};

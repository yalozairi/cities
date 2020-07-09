import React from "react";
// Data
import cities from "../cities";

// Components
import CityItem from "./CityItem";

const CityList = ({ setCity }) => {
  const citiesList = cities.map((city) => (
    <CityItem city={city} setCity={setCity} />
  ));
  return citiesList;
};
export default CityList;

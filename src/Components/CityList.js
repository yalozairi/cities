import React from "react";
// Data
import cities from "../cities";

// Components
import CityItem from "./CityItem";
import SearchBar from "./SearchBar";

const CityList = ({ setCity, setQuery, query }) => {
  
  const citiesList = cities.filter((city) => city.name.toLowerCase().includes(query.toLowerCase())).map((city) => <CityItem city={city} setCity={setCity} key={city.id}/>);
    
  ;
  return (
    <div>
    <SearchBar setQuery={setQuery}/>
    {citiesList}
    </div>
  );
};
export default CityList;

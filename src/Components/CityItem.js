import React from "react";
// Styles
import { CityWrapper } from "../styles";

const CityItem = ({ city, setCity }) => {
  return (
    <CityWrapper>
       
      <h1>{city.name}</h1>
      <h4>{city.description}</h4>
      <img src={city.image} alt={city.name} onClick={() => setCity(city)} />
    </CityWrapper>
  );
};
export default CityItem;

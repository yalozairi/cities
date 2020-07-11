import React from "react";
import { Link } from "react-router-dom";

// Styles
import { CityWrapper } from "../styles";

const CityItem = ({ city, setCity }) => {
  return (
    <CityWrapper>
      <h1>{city.name}</h1>
      <h4>{city.description}</h4>
      <Link to={`/cities/${city.slug}`}>
      <img src={city.image} alt={city.name} onClick={() => setCity(city)} />
      </Link>
    </CityWrapper>
  );
};
export default CityItem;

import React from "react";
// Styles
import { DetailWrapper } from "../styles";

const CityDetail = ({ city }) => {
  return (
    <DetailWrapper>
      <h1>{city.name}</h1>
      <h4>{city.description}</h4>
      <img src={city.image} alt={city.name} />
    </DetailWrapper>
  );
};
export default CityDetail;

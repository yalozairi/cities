import React from "react";
// Styles
import { DetailWrapper } from "../styles";

//Components
import Recommendations from "./Recommendations";

const CityDetail = ({ city }) => {

  return (
    <>
    <DetailWrapper>
      <h1>{city.name}</h1>
      <h4>{city.description}</h4>
      <img src={city.image} alt={city.name} />
    </DetailWrapper>
      <br/>
      <div>
      <Recommendations city={city}/>
      </div>
      </>
  );
};
export default CityDetail;

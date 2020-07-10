import React from "react";
// Styles
import { DetailWrapper } from "../styles";

//Components
import Recommendations from "./Recommendations";

const CityDetail = ({ city }) => {
  return (
    <>
      <DetailWrapper>
        <h1>{city.nameCountry}</h1>
        <h4>{city.description}</h4>
        <h5>Climate: {city.climate}</h5>
        <h5>Population: {city.population}</h5>
        <h5>Time zone: {city.timeZone}</h5>
        <img src={city.image} alt={city.name} />
        <div>
          <iframe
            src={city.googleMap}
            width={600}
            height={450}
            // frameborder={0}
            // style={"border:0"}
            // allowfullscreen=""
            // ariaHidden={false}
            // tabindex={0}
            alt={city.name}
          ></iframe>
        </div>
      </DetailWrapper>
      <br />
      <div>
        <Recommendations city={city} />
      </div>
    </>
  );
};
export default CityDetail;

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
            title={"Map"}
            // frameborder={0}
            // style={"border:0"}
            // allowfullscreen=""
            // ariaHidden={false}
            // tabindex={0}
            alt={city.name}
          ></iframe>
<div>
  <h1>These are the top three {city.name} attractions!</h1>
<h2>{city.attractions[0].name}</h2>
<h3>{city.attractions[0].description}</h3>
<img src={city.attractions[0].image} alt={city.attractions[0].name}/>

<h2>{city.attractions[1].name}</h2>
<h3>{city.attractions[1].description}</h3>
<img src={city.attractions[1].image} alt={city.attractions[1].name}/>

<h2>{city.attractions[2].name}</h2>
<h3>{city.attractions[2].description}</h3>
<img src={city.attractions[2].image} alt={city.attractions[2].name}/>

</div>


        </div>
      </DetailWrapper>
      <br />
     
        <DetailWrapper>
        <Recommendations city={city} />
        </DetailWrapper>
     
    </>
  );
};
export default CityDetail;

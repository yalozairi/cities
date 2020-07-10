import React from "react";
import cities from "../cities";


const Recommendations = ({city}) => {
    let recommended;

    for (let i=0; i<cities.length; i++) {
        if (cities[i]=== city.recommendedCities[0]) {
            recommended=cities[city.recommendedCities[0]]
        } else if (cities[i]=== city.recommendedCities[1]) {
            recommended=cities[city.recommendedCities[1]]
        } else if (cities[i]=== city.recommendedCities[2]) {
            recommended=cities[city.recommendedCities[2]]
        };
    };
   
  return (
      <>
    <h1>{city.recommendedSentence}</h1>
    <h2>{recommended.name}</h2>
    <img src={recommended.image}/>
    </>
  )
};
export default Recommendations;
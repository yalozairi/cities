import React from "react";
import {Link } from "react-router-dom";

//data
import cities from "../cities";

const RecommendationItem = ({city, setRecommendations}) => {

 return (
    <>
  <h1>{city.name}</h1>
  <Link to={`/cities/${city.slug}`} >
  <img src={city.image} alt={city.name}/>
  </Link>
    </>
  );
};
export default RecommendationItem;
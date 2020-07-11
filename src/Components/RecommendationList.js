import React from "react";
import RecommendationItem from "./RecommendationItem";

//styles
// import {CityWrapper} from "../styles"

const RecommendationList = ({ city, recommendations, setRecommendations }) => {

  const recommendationList = recommendations.filter((cityRec) => cityRec.type === city.type && cityRec.id !== city.id).map((_cityRec) => <RecommendationItem city={_cityRec} key={city.name} setRecommendations={setRecommendations}/>)
  
  return (
    <>
    {recommendationList}
    </>
  );
};

export default RecommendationList;

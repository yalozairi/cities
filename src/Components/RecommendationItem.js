import React from "react";
import { Link } from "react-router-dom";

const RecommendationItem = ({ city, setRecommendations }) => {
  return (
    <div className="col">
      <h2 style={{ textAlign: "center" }}>{city.name}</h2>
      <Link to={`/cities/${city.slug}`}>
        <img src={city.image} alt={city.name} />
      </Link>
    </div>
  );
};
export default RecommendationItem;

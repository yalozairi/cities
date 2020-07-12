import React from "react";
import { Link } from "react-router-dom";

const CityItem = ({ city, setCity }) => {
  return (
    <div className="card" style={{ width: "50rem", margin: "50px auto" }}>
      <img src={city.image} class="card-img-top" alt={city.name} />
      <div className="card-body">
        <h5 className="card-title">{city.name}</h5>
        <p className="card-text">{city.description}</p>
        <Link to={`/cities/${city.slug}`}>
          <p className="btn btn-primary" onClick={() => setCity(city)}>
            Check out {city.name}
          </p>
        </Link>
      </div>
    </div>
  );
};
export default CityItem;

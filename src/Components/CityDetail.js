import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

// Styles
import { DetailWrapper, CityWrapper } from "../styles";

//Components
import RecommendationList from "./RecommendationList";

const CityDetail = ({ cities }) => {
  const citySlug = useParams().citySlug;
  const city = cities.find((city) => city.slug === citySlug);
  const [recommendations, setRecommendations] = useState(cities);

  return (
    <>
      <DetailWrapper>
        <Link to="/">
          <button
            type="button"
            class="btn btn-secondary"
            style={{ marginRight: "10px" }}
          >
            Back
          </button>
        </Link>

        <CopyToClipboard text={window.location.href}>
          <button type="button" class="btn btn-primary">
            Share
          </button>
        </CopyToClipboard>
        <div style={{ float: "left" }}>
          <h1 style={{ marginTop: "5px" }}>{city.nameCountry}</h1>
          <h4>{city.description}</h4>
          <h5>Climate: {city.climate}</h5>
          <h5>Population: {city.population}</h5>
          <h5>Time zone: {city.timeZone}</h5>
          <img src={city.image} alt={city.name} style={{ margin: "auto" }} />
        </div>
        <div style={{ float: "right" }}>
          <iframe
            src={city.googleMap}
            width={450}
            height={337.5}
            title={"Map"}
            frameborder={0}
            style={{ border: "0" }}
            allowfullscreen=""
            ariaHidden={false}
            tabindex={0}
            alt={city.name}
          ></iframe>
        </div>
        <div style={{ clear: "both" }}></div>
        <div className="row">
          <h1>These are the top three {city.name} attractions!</h1>
          <div className="col">
            <h2>{city.attractions[0].name}</h2>
            <h5>{city.attractions[0].description}</h5>
            <img
              src={city.attractions[0].image}
              alt={city.attractions[0].name}
            />
          </div>
          <div className="col">
            <h2>{city.attractions[1].name}</h2>
            <h5>{city.attractions[1].description}</h5>
            <img
              src={city.attractions[1].image}
              alt={city.attractions[1].name}
            />
          </div>
          <div className="col">
            <h2>{city.attractions[2].name}</h2>
            <h5>{city.attractions[2].description}</h5>
            <img
              src={city.attractions[2].image}
              alt={city.attractions[2].name}
            />
          </div>
        </div>
      </DetailWrapper>
      <br />

      <CityWrapper>
        <h1>{city.recommendedSentence}</h1>
        <RecommendationList
          city={city}
          recommendations={recommendations}
          setRecommendations={setRecommendations}
        />
      </CityWrapper>
    </>
  );
};
export default CityDetail;

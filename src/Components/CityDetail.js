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
  
const attractions = city.attractions.map((attract) => {
    return (
            <div className="col">
            <h2>{attract.name}</h2>
            <h5>{attract.description}</h5>
            <img
              src={attract.image}
              alt={attract.name}
            />
            </div>
)}
)



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
        </div>

          <div className="container">
          <div className="row">
          <div className="col">
          <img src={city.image} alt={city.name}/>
          </div>
          <div className="col">
          <iframe
            src={city.googleMap}
            width={450}
            height={337.5}
            title={"Map"}
            frameborder={0}
            style={{ border: "0"}}
            allowfullscreen=""
            ariaHidden={false}
            tabindex={0}
            alt={city.name}
          ></iframe>
          </div>
          </div>
          </div>
        <div style={{ clear: "both" }}></div>
        <div className="row">
          <h1 style={{textAlign: "center"}}>These are the top three {city.name} attractions!</h1>
          <div className="row">

{attractions}
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

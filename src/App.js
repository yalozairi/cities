import React, { useState } from "react";

// Styles
import { Title } from "./styles";

// Components
import CityList from "./Components/CityList";
import CityDetail from "./Components/CityDetail";

function App() {
  const [city, setCity] = useState(null);
  const [query, setQuery] = useState("");

  return (
    <div>
      <Title>City Guide!</Title>
      {city ? <CityDetail city={city} /> : <CityList setCity={setCity} setQuery={setQuery} query={query} />}
    </div>
  );
}

export default App;

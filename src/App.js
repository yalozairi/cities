import React, { useState } from "react";

// Styles
import { Title } from "./styles";
// Data
import cities from "./cities";
// Components
import CityList from "./Components/CityList";
import CityDetail from "./Components/CityDetail";

function App() {
  const [city, setCity] = useState(null);

  return (
    <div>
      <Title>Hello world!</Title>
      {city ? <CityDetail city={city} /> : <CityList setCity={setCity} />}
    </div>
  );
}

export default App;

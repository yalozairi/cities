import React, { useState } from "react";
import { Route, Switch } from "react-router";

// Styles
import { Title } from "./styles";

// Components
import CityList from "./Components/CityList";
import CityDetail from "./Components/CityDetail";

//Data
import cities from "./cities";

function App() {
  const [city, setCity] = useState(null);
  const [query, setQuery] = useState("");

  return (
    <div>
      <Title>City Guide!</Title>
      <Switch>
        <Route exact path="/cities/:citySlug">
          <CityDetail cities={cities} _city={city} />
        </Route>

        <Route path="/">
          <CityList setCity={setCity} setQuery={setQuery} query={query} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

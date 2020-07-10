import React from "react";

//Styles
import {SearchBarStyled} from "../styles";

const SearchBar = ({setQuery}) => {

  return <SearchBarStyled placeholder="Type a City Here!" onChange={event => setQuery(event.target.value)}/>;
};

export default SearchBar;
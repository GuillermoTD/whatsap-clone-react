import React from "react";
import { SearchBarStyles } from "./SearchBarStyles";
import searchIcon from "../../img/search.svg";
const SearchBar = () => {
  return (
    <SearchBarStyles>
      <div className="SearchBarBox">
        <img src={searchIcon} alt="" />
        <input type="text" placeholder="Search a chat or create one" />
      </div>
    </SearchBarStyles>
  );
};

export default SearchBar;

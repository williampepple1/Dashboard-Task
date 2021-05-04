import React, { useState } from "react";
import search from "../img/search.png";
import "./SearchForm.css";

const SearchForm = () => {
  const [searchItem, updateSearchItem] = useState("");
  return (
    <form action="" className="search-form">
      <div className="search-box">
        <img src={search} alt="Search" className="search-icon" />
        <input
          type="text"
          name="find-item"
          id="find-item"
          placeholder="   Search everything..."
          value={searchItem}
          onChange={(e) => {
            updateSearchItem(e.target.value);
          }}
          className="search-form__input"
        />
      </div>
      <input
        type="button"
        value="Add new item"
        className="search-form__button"
      />
    </form>
  );
};

export default SearchForm;

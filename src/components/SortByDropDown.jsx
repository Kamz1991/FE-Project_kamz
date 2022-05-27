import { useState } from "react";
import { patchVotes, getArticles } from "../api";

const SortByDropDown = ({ query, setQuery }) => {
  return (
    <form className="dropdown">
      <label className="search-by" htmlFor="query">
        Search By:
      </label>
      <select
        className="input-box"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      >
        <option value="votes_desc">most popular</option>
        <option value="votes_asc">least popular</option>
        <option value="created_at_desc">newest article</option>
        <option value="created_at_asc">oldest article</option>
      </select>
    </form>
  );
};

export default SortByDropDown;

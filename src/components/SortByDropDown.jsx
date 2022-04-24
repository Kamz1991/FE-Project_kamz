import { useState } from "react";
import { patchVotes, getArticles } from "../api";

const SortByDropDown = ({ query, setQuery }) => {
  return (
    <form className="dropdown">
      <label htmlFor="query">query</label>
      <select
        onChange={(e) => {
          setQuery(e.target.value);
          console.log(e.target.value, "<<<<<<<<<<<<<");
          console.log(query);
        }}
      >
        <option value="votes_asc">least popular</option>
        <option value="comment_count_desc">most commented</option>
        <option value="created_at_desc">newest article</option>
        <option value="created_at_asc">oldest</option>
        <option value="comment_count_asc">least commented</option>
        <option value="votes_desc">most popular</option>
      </select>
    </form>
  );
};

export default SortByDropDown;

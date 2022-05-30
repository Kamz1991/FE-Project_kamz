import { useEffect, useState } from "react";
import { getTopics } from "../api";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SortByDropDown = ({ query, setQuery }) => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setIsLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  if (loading)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  const queries = [
    { value: "votes_desc", text: "most popular" },
    { value: "votes_asc", text: "least popular" },
    { value: "created_at_desc", text: "newest article" },
    { value: "created_at_asc", text: "oldest article" },
  ];

  return (
    <div className="dropDown">
      <Box sx={{ minWidth: 120 }} className="box">
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={query}
            label="Age"
            onChange={handleChange}
            variant="outlined"
          >
            {queries.map((query, index) => {
              return (
                <MenuItem key={index} value={query.value}>
                  {query.text}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
export default SortByDropDown;

// import { useState } from "react";
// import { patchVotes, getArticles } from "../api";

// const SortByDropDown = ({ query, setQuery }) => {
//   return (
//     <form className="dropdown">
//       <label className="search-by" htmlFor="query">
//         Search By:
//       </label>
//       <select
//         className="input-box"
//         onChange={(e) => {
//           setQuery(e.target.value);
//         }}
//       >
//         <option value="votes_desc">most popular</option>
//         <option value="votes_asc">least popular</option>
//         <option value="created_at_desc">newest article</option>
//         <option value="created_at_asc">oldest article</option>
//       </select>
//     </form>
//   );
// };

// export default SortByDropDown;

import { useEffect, useState } from "react";
import { getTopics } from "../api";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Navigation = () => {
  const [currentTopic, setCurrentTopic] = useState("");
  const [topics, setTopics] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
      setIsLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    setCurrentTopic(e.target.value);
  };

  if (loading)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  return (
    <div className="dropDown">
      <Box sx={{ minWidth: 120 }} className="box">
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Topic</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentTopic}
            label="Age"
            onChange={handleChange}
            variant="outlined"
          >
            {topics.map((topic) => {
              return (
                <MenuItem key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
export default Navigation;

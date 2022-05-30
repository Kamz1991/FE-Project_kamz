import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { postedComments } from "../api";
const PostComments = ({ article_id, comments, setComments }) => {
  const [commentToAdd, setCommentToAdd] = useState("");
  const [username, setUsername] = useState("jessjelly");

  const handleClick = (e) => {
    e.preventDefault();
    postedComments(article_id, commentToAdd, username)
      .then((data) => {
        setComments((currComments) => {
          return [data, ...currComments];
        });
        setCommentToAdd("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Post comment"
        variant="outlined"
        value={commentToAdd}
        required
        onChange={(e) => setCommentToAdd(e.target.value)}
      />
      <Button
        variant="text"
        onClick={handleClick}
        style={{ width: "40px", height: "40px" }}
      >
        Post
      </Button>
    </div>
  );
};

export default PostComments;

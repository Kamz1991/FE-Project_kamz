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
    <form onSubmit={handleClick}>
      <textarea
        required
        value={commentToAdd}
        onChange={(e) => setCommentToAdd(e.target.value)}
      ></textarea>
      <button>post</button>
    </form>
  );
};

export default PostComments;

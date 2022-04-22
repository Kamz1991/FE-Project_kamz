import { useEffect, useState } from "react";
import { postedComments } from "../api";
const PostComments = ({ article_id, comments, setComments }) => {
  const [beenClicked, setBeenClicked] = useState(false);
  const [commentToAdd, setCommentToAdd] = useState("");
  const [username, setUsername] = useState("jessjelly");

  useEffect(() => {
    if (!beenClicked) return;

    postedComments(article_id, commentToAdd, username)
      .then((data) => {
        setComments((currComments) => {
          return [data, ...currComments];
        });
        setCommentToAdd("");
        setBeenClicked(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id, comments, commentToAdd, beenClicked, username, setComments]);

  const handleClick = (e) => {
    setBeenClicked(true);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleClick}>
      <textarea
        value={commentToAdd}
        onChange={(e) => setCommentToAdd(e.target.value)}
      ></textarea>
      <button>post</button>
    </form>
  );
};

export default PostComments;

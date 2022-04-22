import { useEffect, useState } from "react";
import { postedComments } from "../api";
const PostComments = ({ article_id, comments, setSingleArticle }) => {
  const [displayedComments, setDisplayedComments] = useState("");
  const [beenClicked, setBeenClicked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("jessjelly");

  useEffect(() => {
    if (!beenClicked) return;

    postedComments(article_id, newComment, username).then(() => {});
  }, [
    article_id,
    displayedComments,
    comments,
    newComment,
    beenClicked,
    username,
  ]);

  const handleClick = (e) => {
    console.log(beenClicked);
    e.preventDefault();
    setBeenClicked(false);

    setDisplayedComments((currComments) => {
      const newComments = [comments, ...currComments];
      return newComments;
    });
    setBeenClicked(true);
    setDisplayedComments(comments + newComment);
  };

  return (
    <form onSubmit={handleClick}>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button>post</button>
    </form>
  );
};

export default PostComments;

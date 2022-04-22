import { useEffect, useState } from "react";
import { getComments } from "../api";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);

  return (
    <div>
      <h2>Comments</h2>
      <ul className="comments_list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h5>{comment.author}</h5>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
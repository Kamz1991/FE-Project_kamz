import { useEffect, useState } from "react";
import { getComments } from "../api";
import { useParams } from "react-router-dom";
import PostComments from "./PostComments";
import { Card, CardContent, Typography } from "@mui/material";

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
      <PostComments
        article_id={article_id}
        comments={comments}
        setComments={setComments}
      />
      <h2 style={{ display: "flex", justifyContent: "center" }}>Comments</h2>
      <ul className="comments_list">
        {comments.map((comment) => {
          return (
            <Card style={{ marginBottom: "20px" }}>
              <CardContent>
                <Typography variant="h6">{comment.author}</Typography>
                <Typography>{comment.body}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleArticle } from "../api";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
      })
      .catch((err) => {
        setError("error");
      });
  }, [article_id]);

  if (article === null) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    <h2>it dead</h2>;
  }

  return (
    <div>
      <Card sx={{ margin: "10px" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {article.title}
          </Typography>

          <Typography color="text.secondary">topic: {article.topic}</Typography>
          <Typography color="text.secondary" gutterBottom>
            votes: {article.votes}
          </Typography>
          <Typography>{article.body}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleArticle;

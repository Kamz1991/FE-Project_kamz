import { useState, useEffect } from "react";
import { getArticles } from "../api";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((allArticles) => {
      setArticles(allArticles);
      setIsLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="loading-icon">
        <CircularProgress />
      </div>
    );
  return (
    <div className="articles-container">
      {articles.map((article) => {
        return (
          <div className="article-card">
            <Card sx={{ maxWidth: "45vw" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {article.title}
                </Typography>

                <Typography color="text.secondary">
                  topic: {article.topic}
                </Typography>
                <Typography color="text.secondary">
                  votes: {article.votes}
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;

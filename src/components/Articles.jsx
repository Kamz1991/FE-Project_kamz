import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getArticles } from "../api";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Articles = ({ currentTopic }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getArticles(currentTopic).then((allArticles) => {
      setArticles(allArticles);
      setIsLoading(false);
    });
  }, [currentTopic]);

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
          <div key={article.article_id} className="article-card">
            <Card
              sx={{ maxWidth: "45vw" }}
              onClick={() => {
                navigate(`/article/${article.article_id}`);
              }}
            >
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

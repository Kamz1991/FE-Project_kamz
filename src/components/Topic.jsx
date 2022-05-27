import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import SortByDropDown from "./SortByDropDown";
import Card from "react-bootstrap/Card";

const Topic = ({ query, setQuery }) => {
  const { topic } = useParams();
  const [error, setError] = useState(null);

  const [topicArticles, setTopicArticles] = useState([]);
  useEffect(() => {
    getArticles(topic)
      .then((articlesFromAPi) => {
        setTopicArticles(articlesFromAPi);
      })
      .catch((err) => {
        setError("error");
      });
  }, [setTopicArticles, topic]);
  if (error) {
    return <p className="not-found">Sorry, we couldn't find that article</p>;
  }

  return (
    <main>
      <h1>
        <Link to="/">
          <h2 className="header">Articles Home</h2>
        </Link>
      </h1>
      <SortByDropDown query={query} setQuery={setQuery} />
      <ul>
        <h2>List of our {topic} articles</h2>
        {topicArticles.map((article) => {
          return (
            <Card className="all-articles-card">
              <Card.Title>
                <Link to={`/article/${article.article_id}`}>
                  <h1 className="Title-text"> {article.title}</h1>
                </Link>
              </Card.Title>
              <Link to={`/article/${article.article_id}`}>
                <Card.Img
                  className="article-img"
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk29hpG3wUV41i5yFbTEajIjL2Tof0kk8Gxg&usqp=CAU"
                />
              </Link>

              <Card.Body>
                <Card.Text className="text">topic: {article.topic}</Card.Text>
                <Card.Text className="text">Votes: {article.votes}</Card.Text>
                <Card.Text className="text">
                  Author: {article.author}
                </Card.Text>{" "}
                <Card.Text className="text">
                  Published: {article.created_at}
                </Card.Text>
                <Card.Text className="text">
                  Total comments: {article.comment_count}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </ul>
    </main>
  );
};

export default Topic;

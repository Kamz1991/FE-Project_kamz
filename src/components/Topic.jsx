import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Topic = () => {
  const { topic } = useParams();

  const [topicArticles, setTopicArticles] = useState([]);
  useEffect(() => {
    getArticles(topic).then((articlesFromAPi) => {
      setTopicArticles(articlesFromAPi);
    });
  }, [setTopicArticles, topic]);

  return (
    <main>
      <h1>
        <Link to="/">Articles Home</Link>
      </h1>
      <ul>
        <h2>List of our {topic} articles</h2>
        {topicArticles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/article/${article.article_id}`}>
                <h2>{article.title}</h2>
              </Link>
              <p>topic: {article.topic}</p>
              <p>votes: {article.votes}</p>
              <p>author: {article.author}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Topic;

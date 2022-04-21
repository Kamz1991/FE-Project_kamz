import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromAPi) => {
      setArticles(articlesFromAPi);
    });
  }, []);

  return (
    <main>
      <h1>
        <Link to="/">Articles Home</Link>
      </h1>

      <h2>List of our artilces</h2>
      {articles.map((article) => {
        return (
          <ul>
            <li key={article.article_id}>
              <Link to={`/article/${article.article_id}`}>
                <h2>{article.title}</h2>
              </Link>
              <p>topic: {article.topic}</p>
              <p>votes: {article.votes}</p>
              <p>author: {article.author}</p>
            </li>
          </ul>
        );
      })}
    </main>
  );
};
export default Articles;

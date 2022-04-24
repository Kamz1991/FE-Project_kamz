import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { Link } from "react-router-dom";
import SortByDropDown from "./SortByDropDown";

const Articles = ({ query, setQuery }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const lastIndexOf_ = query.lastIndexOf("_");
    console.log(lastIndexOf_);
    const sortBYQuery = query.slice(0, lastIndexOf_);
    const orderByQuery = query.slice(lastIndexOf_ + 1);
    getArticles("", sortBYQuery, orderByQuery).then((articlesFromAPi) => {
      setArticles(articlesFromAPi);
    });
  }, [query]);

  return (
    <main>
      <h1>
        <Link to="/">Articles Home</Link>
      </h1>
      <SortByDropDown query={query} setQuery={setQuery} />

      <h2>List of our articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/article/${article.article_id}`}>
                <h2>{article.title}</h2>
              </Link>
              <p>topic: {article.topic}</p>
              <p>votes: {article.votes}</p>
              <p>author: {article.author}</p>
              <p>created: {article.created_at}</p>
              <p>comment count: {article.comment_count}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default Articles;

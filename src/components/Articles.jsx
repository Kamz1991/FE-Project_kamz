import { useEffect, useState } from "react";
import { getArticles } from "../api";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromAPi) => {
      console.log(articlesFromAPi, "<<<<<<<<");
      setArticles(articlesFromAPi);
    });
  }, []);

  return (
    <main>
      <h2>List of our artilces</h2>
      {articles.map((article) => {
        return (
          <ul>
            <li key={article.article_id}>
              <h2>{article.title}</h2>
            </li>
          </ul>
        );
      })}
    </main>
  );
};
export default Articles;

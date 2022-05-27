import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { Link } from "react-router-dom";
import SortByDropDown from "./SortByDropDown";
import Card from "react-bootstrap/Card";
import { TailSpin } from "react-loading-icons";
const Articles = ({ query, setQuery }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const lastIndexOf_ = query.lastIndexOf("_");
    console.log(lastIndexOf_);
    const sortBYQuery = query.slice(0, lastIndexOf_);
    const orderByQuery = query.slice(lastIndexOf_ + 1);
    getArticles("", sortBYQuery, orderByQuery)
      .then((articlesFromAPi) => {
        setArticles(articlesFromAPi);
      })
      .catch((err) => {
        setError("error");
      });
  }, [query]);

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

      <h2>List of our articles</h2>
      <ul>
        {articles.map((article) => {
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
export default Articles;

// <li key={article.article_id}>
//   <Link to={`/article/${article.article_id}`}>
//     <h2>{article.title}</h2>
//   </Link>
//   <p>topic: {article.topic}</p>
//   <p>votes: {article.votes}</p>
//   <p>author: {article.author}</p>
//   <p>created: {article.created_at}</p>
//   <p>comment count: {article.comment_count}</p>
// </li>

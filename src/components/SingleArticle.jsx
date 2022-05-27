import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleArticle } from "../api";
import { Link } from "react-router-dom";
import VoteButton from "./VoteButton";
import Comments from "./Comments";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleFromApi) => {
        setSingleArticle(articleFromApi);
      })
      .catch((err) => {
        setError("error");
      });
  }, [article_id]);
  if (!singleArticle) return null;

  if (error) {
    return <p className="not-found">Sorry, we couldn't find that article</p>;
  }

  return (
    <main className="single-article">
      <h1>
        <Link to="/">
          <h2 className="header">Home page</h2>
        </Link>
      </h1>

      <h2>{singleArticle.title}</h2>
      <p className="single-article-text">topic: {singleArticle.topic}</p>

      <p className="single-article-text">author: {singleArticle.author}</p>
      <p className="single-article-text">body: {singleArticle.body}</p>
      <p className="single-article-text">
        created at:{singleArticle.created_at}
      </p>

      <p className="single-article-text">
        comment count: {singleArticle.comment_count}
      </p>

      <VoteButton
        article_id={singleArticle.article_id}
        votes={singleArticle.votes}
        setSingleArticle={setSingleArticle}
      />

      <Comments setSingleArticle={setSingleArticle} />
    </main>
  );
};

export default SingleArticle;

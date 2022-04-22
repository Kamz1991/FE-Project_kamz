import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleArticle } from "../api";
import { Link } from "react-router-dom";
import VoteButton from "./VoteButton";
import Comments from "./Comments";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  useEffect(() => {
    getSingleArticle(article_id).then((articleFromApi) => {
      setSingleArticle(articleFromApi);
    });
  }, [article_id]);
  if (!singleArticle) return null;
  return (
    <main>
      <h1>
        <Link to="/">Home page</Link>
      </h1>

      <h2>{singleArticle.title}</h2>
      <p>topic: {singleArticle.topic}</p>

      <p>author: {singleArticle.author}</p>
      <p>body: {singleArticle.body}</p>
      <p> created at:{singleArticle.created_at}</p>

      <p>comment count: {singleArticle.comment_count}</p>

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

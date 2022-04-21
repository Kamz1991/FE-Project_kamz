import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTopics } from "../api";
const Nav = () => {
  const [topics, setTopics] = useState("");
  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);
  if (!topics) return null;
  return (
    <nav>
      {topics.map((topic) => {
        return (
          <Link key={topic.slug} to={`/${topic.slug}`}>
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;

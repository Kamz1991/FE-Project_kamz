import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getTopics } from "../api";
const Navigation = () => {
  const [topics, setTopics] = useState("");
  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);
  if (!topics) return null;
  return (
    <nav className="nav-bar">
      {topics.map((topic) => {
        return (
          <Link color="nav-link-text" key={topic.slug} to={`/${topic.slug}`}>
            <h2 className="nav-link-text"> {topic.slug}</h2>
          </Link>
        );
      })}
    </nav>
  );
};
export default Navigation;

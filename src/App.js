import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Topic from "./components/Topic";
import SingleArticle from "./components/SingleArticle";
import { useState } from "react";
function App() {
  // const [topics, setTopics] = useState("");
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/article/:article_id" element={<SingleArticle />} />
        <Route
          path="/"
          element={<Articles query={query} setQuery={setQuery} />}
        />
        <Route
          path="/:topic"
          element={<Topic query={query} setQuery={setQuery} />}
        />
      </Routes>
    </div>
  );
}

export default App;

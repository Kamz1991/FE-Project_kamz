import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Articles from "./components/Articles";
import Topic from "./components/Topic";
import SingleArticle from "./components/SingleArticle";
import NotFound from "./components/NotFound.jsx";
import { useState } from "react";
function App() {
  // const [topics, setTopics] = useState("");
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <Navigation />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

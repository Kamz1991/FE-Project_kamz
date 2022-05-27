import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import { useState } from "react";
function App() {
  const [currentTopic, setCurrentTopic] = useState("");

  return (
    <div className="App">
      <Header />
      <Navigation
        setCurrentTopic={setCurrentTopic}
        currentTopic={currentTopic}
      />
      <Routes>
        <Route path="/" element={<Articles currentTopic={currentTopic} />} />
        <Route path="/article/:article_id" element={<SingleArticle />} />
      </Routes>
      {/*  <Routes>
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
      </Routes> */}
    </div>
  );
}

export default App;

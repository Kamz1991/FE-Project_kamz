import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Topic from "./components/Topic";
import SingleArticle from "./components/SingleArticle";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/article/:article_id" element={<SingleArticle />} />
        <Route path="/" element={<Articles />} />
        <Route path="/:topic" element={<Topic />} />
      </Routes>
    </div>
  );
}

export default App;

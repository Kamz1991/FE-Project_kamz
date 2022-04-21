import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import { useState } from "react";
import Topic from "./components/Topic";
import SingleArticle from "./components/SingleArticle";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/article/:article_id"
          element={
            <p>
              <SingleArticle />
            </p>
          }
        ></Route>

        <Route
          path="/"
          element={
            <p>
              <Articles />
            </p>
          }
        ></Route>
        <Route
          path="/:topic"
          element={
            <p>
              <Topic />
            </p>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

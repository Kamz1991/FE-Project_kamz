import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <p>
              <Header />
            </p>
          }
        ></Route>
        <Route
          path="/articles"
          element={
            <p>
              <Articles />
            </p>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

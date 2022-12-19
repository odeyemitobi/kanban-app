import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import Roadmap from "./pages/Roadmap";
import Marketing from "./pages/Marketing";
import BoardsPage from "./pages/BoardsPage";
import Create from "./pages/Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<BoardsPage />} />
          <Route exact path="/marketing" element={<Marketing />} />
          <Route exact path="/roadmap" element={<Roadmap />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

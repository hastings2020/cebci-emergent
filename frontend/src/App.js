import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Homepage2 from "./components/Homepage2";
import TeamPage from "./components/TeamPage";
import NewsListPage from "./components/NewsListPage";
import NewsDetailPage from "./components/NewsDetailPage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Homepage />
              <Homepage2 />
            </div>
          } />
          <Route path="/team/:teamName" element={<TeamPage />} />
          <Route path="/news" element={<NewsListPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

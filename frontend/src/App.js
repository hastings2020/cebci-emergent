import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Homepage2 from "./components/Homepage2";
import TeamPage from "./components/TeamPage";
import NewsListPage from "./components/NewsListPage";
import NewsDetailPage from "./components/NewsDetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

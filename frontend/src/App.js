import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Homepage2 from "./components/Homepage2";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

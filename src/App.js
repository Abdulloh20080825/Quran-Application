import React from "react";
import { Route, Routes } from "react-router-dom";
import Surah from "./components/Surah";
import Main from "./components/main";

const App = () => {
  return (
    <div className="app">
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/surah/:id" element={<Surah />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

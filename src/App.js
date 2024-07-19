import React from "react";
import { Route, Routes } from "react-router-dom";
import Surah from "./components/Surah";
import Main from "./components/main";
import APITest from "./components/API.test";
import GetDjuzQuran from "./components/getDjuzQuran";

const App = () => {
  return (
    <div className="app">
      <div className="app-content">
        <APITest />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/djuz" element={<GetDjuzQuran />} />
          <Route path="/surah/:id" element={<Surah />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

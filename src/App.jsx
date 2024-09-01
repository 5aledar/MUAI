import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Sumz from "./pages/Sumz/Sumz";
import BayanGpt from "./pages/BayanGpt/BayanGpt";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sumz" element={<Sumz />} />
        <Route path="/yourgpt" element={<BayanGpt />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

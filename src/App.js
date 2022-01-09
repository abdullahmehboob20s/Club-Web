import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NFTPresentation from "./pages/NFTPresentation/NFTPresentation";
import React from "react";
import ScrollToTopButton from "components/Buttons/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft-presentaion" element={<NFTPresentation />} />
      </Routes>

      <ScrollToTopButton />
    </Router>
  );
}

export default App;

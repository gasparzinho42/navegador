import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GoogleImages from "../pages/googleImages";

import LandingPage from "../pages/landingPage";

const RoutesTest = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/images" element={<GoogleImages />} />
      </Routes>
    </Router>
  );
};

export default RoutesTest;

import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "../pages/home";

const HomeRoutes = () => {
  return (
    <>
      <div>Navigation Bar</div>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};

export default HomeRoutes;

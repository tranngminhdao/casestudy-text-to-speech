import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeRoutes from "./routes/homeRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomeRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

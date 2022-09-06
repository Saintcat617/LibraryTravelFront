import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LinkRoutes from "../constants/LinkRoutes.jsx"
import App from "../app/App.jsx";

const Road = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LinkRoutes.inventory} element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Road;
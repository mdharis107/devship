import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Dashboard />} />
    </Routes>
  );
};

export default MainRoute;

import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FormBuilderPage from "./pages/FormBuilderPage";

const { Header, Content } = Layout;

const App = () => {
  const token = localStorage.getItem("token"); // 👈 check if user is logged in

  return (
    <Routes>
      {/* Default route — if no token, redirect to login */}
      <Route
        path="/"
        element={
          token ? <Navigate to="/form-builder" /> : <Navigate to="/login" />
        }
      />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protect form builder route */}
      <Route
        path="/form-builder"
        element={
          token ? <FormBuilderPage /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
};

export default App;
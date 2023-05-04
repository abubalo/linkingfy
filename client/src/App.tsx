import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import axios from "axios"
function App() {

  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.withCredentials = true;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

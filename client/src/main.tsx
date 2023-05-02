import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <App />
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);

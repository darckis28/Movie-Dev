import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ScrollTotop from "./components/shared/ScrollTotop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTotop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

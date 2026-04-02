import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const rootEl = document.getElementById("root");

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
} else {
  document.body.innerHTML =
    "<div style='padding:40px;font-family:Arial,sans-serif'>Root div not found</div>";
}

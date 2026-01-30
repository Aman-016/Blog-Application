import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css"; // ✅ only this (NO flowbite css import)

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ToDo from "./ToDo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToDo />
  </StrictMode>
);

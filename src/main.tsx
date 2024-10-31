import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { InitialForm } from "./pages/initial-form";
import './i18n.js'; // Importa o arquivo

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InitialForm />
  </StrictMode>
);

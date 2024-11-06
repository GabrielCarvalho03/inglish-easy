import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n.js"; // Importa o arquivo
import { Payment } from "./pages/payment/index.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Payment />
  </StrictMode>
);

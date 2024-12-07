import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n.js";
import { RouterProvider } from "react-router-dom";
import { Route } from "./router.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={Route} />
    <ToastContainer />
  </StrictMode>
);

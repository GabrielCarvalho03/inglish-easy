import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Payment } from "./pages/payment";

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/payment", element: <Payment /> },
]);

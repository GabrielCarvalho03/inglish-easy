import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Payment } from "./pages/payment";
import { More } from "./pages/more/index";

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/payment", element: <Payment /> },
  { path: "/more", element: <More /> },
]);

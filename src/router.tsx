import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Payment } from "./pages/payment";
import { More } from "./pages/more/index";
import { Register } from "./pages/Register";
import { RegisterSuccess } from "./pages/Register/success";
import { RegisterSuccessPayment } from "./pages/payment/success";

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/payment", element: <Payment /> },
  { path: "/more", element: <More /> },
  { path: "/register", element: <Register /> },
  { path: "/register/success", element: <RegisterSuccess /> },
  { path: "/register/success-payment", element: <RegisterSuccessPayment /> },
]);

import { useRoutes } from "react-router-dom";
import Goods from "./component/Goods";
import Home from "./component/Home";
import ORDER from "./component/Order";
import Validation from "./ValidationsPage/Validation";

export default function Router() {
  return useRoutes([
    { path: "/Home", element: <Home /> },
    { path: "/Goods", element: <Goods /> },
    { path: "/Order", element: <ORDER /> },
    { path: "/Validation", element: <Validation /> },
  ]);
}

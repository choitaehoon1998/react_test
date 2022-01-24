import { useRoutes } from "react-router-dom";
import Goods from "./component/Goods";
import Home from "./component/Home";
import ORDER from "./component/Order";
import Buttons from "./ButtonsPage/Buttons";
import Components from "./ComponentPage/components";

export default function Router() {
  return useRoutes([
    { path: "/home", element: <Home /> },
    { path: "/Goods", element: <Goods /> },
    { path: "/Order", element: <ORDER /> },
    { path: "/Buttons", element: <Buttons />},
    { path: "/Components", element: <Components />}
  ]);
}

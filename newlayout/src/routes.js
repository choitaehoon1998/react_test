import React from "react";
import { useRoutes } from "react-router-dom";
import Goods from "./component/Goods";
import Home from "./component/Home";
import ORDER from "./component/Order";
import Buttons from "./ButtonsPage/Buttons";
import Components from "./ComponentPage/components";
import HomeModal from "./component/modal/HomeModal";

export default function Router() {
  return useRoutes([
    { path: "/home", element: <Home /> },
    { path: '/home/modal', element: <HomeModal /> },
    { path: "/Goods", element: <Goods /> },
    { path: "/Order", element: <ORDER /> },
    { path: "/Buttons", element: <Buttons />},
    { path: "/Components", element: <Components />}
  ]);
}

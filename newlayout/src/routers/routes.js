import { Navigate, useRoutes } from "react-router-dom";

import Basestting from "../Pages/Basesettig";
import Home from "../Pages/Home";
import Item from "../Pages/Item";

export default function Router() {
  return useRoutes([
    { path: "/Basestting", element: <Basestting /> },
    { path: "/", element: <Home /> },
    { path: "/Item", element: <Item /> },
  ]);
}

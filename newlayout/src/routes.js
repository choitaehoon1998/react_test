import { Navigate, useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import Basesettig from ".Pages/Basesettig";
import Item from ".Pages/Item";

export default function Router() {
  return useRoutes([
    { path: "/Home", element: <Home /> },
    { path: "/Basesettig", element: <Basesettig /> },
    { path: "/Item", element: <Item /> },
  ]);
}

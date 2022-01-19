import { Navigate, useRoutes } from 'react-router-dom';
import Goods from './compornent/Goods';
import Home from "./compornent/Home";
import ORDER from "./compornent/Order";

export default function Router() {
    return useRoutes([
        {   path: '/home',  element: <Home />   },
        {   path: '/Goods',  element: <Goods />   },
        {   path: '/Order', element: <ORDER />}
    ]);
}
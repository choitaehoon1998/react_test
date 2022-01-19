import React from "react";
import HomeSideMenu from './sidemenu/homeSidemenu';
import GoodsSideMenu from './sidemenu/GoodsSidemenu';
import OrderSideMenu from './sidemenu/orderSidemenu';
import { useResultContext } from "../Context";

export default function Side() {
  const {sideMenu} = useResultContext();

  return(
    <>
    {sideMenu === 1 ? <HomeSideMenu/> : null}
    {sideMenu === 2 ? <GoodsSideMenu/> : null}
    {sideMenu === 3 ? <OrderSideMenu/> : null}
    </>
  )

}
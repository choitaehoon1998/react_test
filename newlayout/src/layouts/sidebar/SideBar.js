import React from "react";
import SidemenuItem from "./SidemenuItem";
import SidemenuHome from "./SidemenuHome";
import SidemenuSetting from "./SidemenuSetting";
import { useResultContext } from "../../Context/Context";

export default function Sidebar() {
  const { sideMenu } = useResultContext();

  return (
    <>
      {sideMenu === 1 ? <SidemenuHome /> : null}
      {sideMenu === 2 ? <SidemenuSetting /> : null}
      {sideMenu === 3 ? <SidemenuItem /> : null}
    </>
  );
}

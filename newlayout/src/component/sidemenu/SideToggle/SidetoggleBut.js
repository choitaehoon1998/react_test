import React from "react";
import { Component, useState } from "react";
import "./SideToggle.css";

const SidetoggleBut = (props) => {
  const [side, setSide] = useState(0);

  return (
    <>
      <div
        className={side === 1 ? "sideButton-ac" : "sideButton"}
        onClick={() => {
          if (side === 0) {
            setSide(1);
          } else if (side === 1) {
            setSide(0);
          }
        }}
      ></div>
    </>
  );
};

export default SidetoggleBut;

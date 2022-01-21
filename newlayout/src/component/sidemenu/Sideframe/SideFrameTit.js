import React, { Component } from "react";

// 사이드 메뉴 제목 컴포넌트 입니다.
const SideFrameTit = ({ name }) => {
  return (
    <div className="sideMenuName">
      <h2>{name}</h2>
    </div>
  );
};

export default SideFrameTit;

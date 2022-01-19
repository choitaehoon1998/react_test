import { BrowserRouter, Link, Route } from "react-router-dom";
import { useState } from "react";
import Sidemenuset from "../layouts/sidebar/SidemenuSetting";

function Basestting() {
  return (
    <>
      <div className="content-wrap">
        <div className="history">
          <ol>
            <li>기본설정</li>
            <li>기본정책</li>
            <li>기본 정보 설정</li>
          </ol>
        </div>

        <div className="content-name">
          <h2>
            기본 정보 설정
            <span>쇼핑몰의 기본적인 정보를 변경하실 수 있습니다.</span>
          </h2>
          <button>저장</button>
        </div>
      </div>
    </>
  );
}

export default Basestting;

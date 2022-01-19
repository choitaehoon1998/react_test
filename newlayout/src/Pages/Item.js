import { BrowserRouter, Link, Route } from "react-router-dom";
import { useState } from "react";
import SidemenuItem from "../layouts/sidebar/SidemenuItem";

function Item() {
  return (
    <>
      <div className="content-wrap">
        <div className="history">
          <ol>
            <li>상품</li>
            <li>상품 관리</li>
            <li>상품 리스트</li>
          </ol>
        </div>

        <div className="content-name">
          <h2>상품 리스트</h2>
          <button>상품 등록</button>
        </div>
      </div>
    </>
  );
}

export default Item;

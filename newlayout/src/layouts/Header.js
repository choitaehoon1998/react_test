import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useResultContext } from "../Context/Context";

function Header() {
  const [menuNav, setMenuNav] = useState(0); // 헤더 style 변경 state
  const { setSideMenu } = useResultContext();

  const setMenu = (navLocation) => {
    setMenuNav(navLocation); // 헤더 style 변경 함수
    setSideMenu(navLocation); // sidebar 변경 state
  };

  return (
    <div id="header">
      <div className="header-top">
        <div className="logo">
          <h1>
            <Link to="/">Godomall 5</Link>
          </h1>
        </div>

        <div className="gnbTop">
          <ul className="list1">
            <li>
              <div className="user">
                <Link to="/">
                  전체 관리자 <span>님</span> (proad00)
                </Link>
              </div>
            </li>
            <li>
              <div className="headerseach1">
                <select
                  id="headerSeach"
                  className="headerSelect"
                  name="headerSeach"
                >
                  <option value={"menu"}>메뉴</option>
                  <option value={"member"}>회원</option>
                </select>
              </div>
              <div className="headerseach2">
                <div id="header-SeachText">
                  <input
                    type="text"
                    className="from1"
                    placeholder="메뉴검색"
                  ></input>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="nav">
        <ul>
          <li
            className={menuNav === 1 ? "navListActive" : "navlist"}
            onClick={() => {
              setMenu(1);
            }}
          >
            <Link to="/Basestting">기본설정</Link>
          </li>
          <li
            className={menuNav === 2 ? "navListActive" : "navlist"}
            onClick={() => {
              setMenu(1);
            }}
          >
            <Link to="/Item">상품</Link>
          </li>
          <li
            className={menuNav === 3 ? "navListActive" : "navlist"}
            onClick={() => {
              setMenu(1);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={menuNav === 3 ? "navListActive" : "navlist"}
            onClick={() => {
              setMenu(1);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={menuNav === 4 ? "navListActive" : "navlist"}
            onClick={() => {
              setMenu(1);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={menuNav === 5 ? "navListActive" : "navlist"}
            onClick={() => {
              setMenu(1);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={menuNav === 6 ? "navListActive" : "navlist"}
            onClick={() => {
              setMenu(1);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={menuNav === 7 ? "navListActive" : "navlist"}
            onClick={() => {
              setMenu(1);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={menuNav === 8 ? "navListActive" : "navlist"}
            onClick={() => {
              setMenu(1);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={menuNav === 9 ? "navListActive" : "navlist"}
            onClick={() => {
              setMenu(1);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={menuNav === 10 ? "navListActive" : "navlist"}
            onClick={() => {
              setMenu(1);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={menuNav === 11 ? "navListActive" : "navlist"}
            onClick={() => {
              setMenu(1);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

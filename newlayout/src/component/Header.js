import { BrowserRouter, Link, Route } from "react-router-dom";
import { useState } from "react";

function Header() {
  // nav의 배경 색
  const [settingNav1, setSettingNav1] = useState(0);
  const [settingNav2, setSettingNav2] = useState(0);
  const [settingNav3, setSettingNav3] = useState(0);
  const [settingNav4, setSettingNav4] = useState(0);
  const [settingNav5, setSettingNav5] = useState(0);
  const [settingNav6, setSettingNav6] = useState(0);
  const [settingNav7, setSettingNav7] = useState(0);
  const [settingNav8, setSettingNav8] = useState(0);
  const [settingNav9, setSettingNav9] = useState(0);
  const [settingNav10, setSettingNav10] = useState(0);
  const [settingNav11, setSettingNav11] = useState(0);
  const [settingNav12, setSettingNav12] = useState(0);

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
            className={settingNav1 === 1 ? "navListActive" : "navlist"}
            onClick={() => {
              setSettingNav1(1);
              setSettingNav2(0);
              setSettingNav3(0);
              setSettingNav4(0);
              setSettingNav5(0);
              setSettingNav6(0);
              setSettingNav7(0);
              setSettingNav8(0);
              setSettingNav9(0);
              setSettingNav10(0);
              setSettingNav11(0);
              setSettingNav12(0);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={settingNav2 === 1 ? "navListActive" : "navlist"}
            onClick={() => {
              setSettingNav1(0);
              setSettingNav2(1);
              setSettingNav3(0);
              setSettingNav4(0);
              setSettingNav5(0);
              setSettingNav6(0);
              setSettingNav7(0);
              setSettingNav8(0);
              setSettingNav9(0);
              setSettingNav10(0);
              setSettingNav11(0);
              setSettingNav12(0);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={settingNav3 === 1 ? "navListActive" : "navlist"}
            onClick={() => {
              setSettingNav1(0);
              setSettingNav2(0);
              setSettingNav3(1);
              setSettingNav4(0);
              setSettingNav5(0);
              setSettingNav6(0);
              setSettingNav7(0);
              setSettingNav8(0);
              setSettingNav9(0);
              setSettingNav10(0);
              setSettingNav11(0);
              setSettingNav12(0);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={settingNav4 === 1 ? "navListActive" : "navlist"}
            onClick={() => {
              setSettingNav1(0);
              setSettingNav2(0);
              setSettingNav3(0);
              setSettingNav4(1);
              setSettingNav5(0);
              setSettingNav6(0);
              setSettingNav7(0);
              setSettingNav8(0);
              setSettingNav9(0);
              setSettingNav10(0);
              setSettingNav11(0);
              setSettingNav12(0);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={settingNav5 === 1 ? "navListActive" : "navlist"}
            onClick={() => {
              setSettingNav1(0);
              setSettingNav2(0);
              setSettingNav3(0);
              setSettingNav4(0);
              setSettingNav5(1);
              setSettingNav6(0);
              setSettingNav7(0);
              setSettingNav8(0);
              setSettingNav9(0);
              setSettingNav10(0);
              setSettingNav11(0);
              setSettingNav12(0);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={settingNav6 === 1 ? "navListActive" : "navlist"}
            onClick={() => {
              setSettingNav1(0);
              setSettingNav2(0);
              setSettingNav3(0);
              setSettingNav4(0);
              setSettingNav5(0);
              setSettingNav6(1);
              setSettingNav7(0);
              setSettingNav8(0);
              setSettingNav9(0);
              setSettingNav10(0);
              setSettingNav11(0);
              setSettingNav12(0);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={settingNav7 === 1 ? "navListActive" : "navlist"}
            onClick={() => {
              setSettingNav1(0);
              setSettingNav2(0);
              setSettingNav3(0);
              setSettingNav4(0);
              setSettingNav5(0);
              setSettingNav6(0);
              setSettingNav7(1);
              setSettingNav8(0);
              setSettingNav9(0);
              setSettingNav10(0);
              setSettingNav11(0);
              setSettingNav12(0);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={settingNav8 === 1 ? "navListActive" : "navlist"}
            onClick={() => {
              setSettingNav1(0);
              setSettingNav2(0);
              setSettingNav3(0);
              setSettingNav4(0);
              setSettingNav5(0);
              setSettingNav6(0);
              setSettingNav7(0);
              setSettingNav8(1);
              setSettingNav9(0);
              setSettingNav10(0);
              setSettingNav11(0);
              setSettingNav12(0);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={settingNav9 === 1 ? "navListActive" : "navlist"}
            onClick={() => {
              setSettingNav1(0);
              setSettingNav2(0);
              setSettingNav3(0);
              setSettingNav4(0);
              setSettingNav5(0);
              setSettingNav6(0);
              setSettingNav7(0);
              setSettingNav8(0);
              setSettingNav9(1);
              setSettingNav10(0);
              setSettingNav11(0);
              setSettingNav12(0);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={settingNav10 === 1 ? "navListActive" : "navlist"}
            onClick={() => {
              setSettingNav1(0);
              setSettingNav2(0);
              setSettingNav3(0);
              setSettingNav4(0);
              setSettingNav5(0);
              setSettingNav6(0);
              setSettingNav7(0);
              setSettingNav8(0);
              setSettingNav9(0);
              setSettingNav10(1);
              setSettingNav11(0);
              setSettingNav12(0);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={settingNav11 === 1 ? "navListActive" : "navlist"}
            onClick={() => {
              setSettingNav1(0);
              setSettingNav2(0);
              setSettingNav3(0);
              setSettingNav4(0);
              setSettingNav5(0);
              setSettingNav6(0);
              setSettingNav7(0);
              setSettingNav8(0);
              setSettingNav9(0);
              setSettingNav10(0);
              setSettingNav11(1);
              setSettingNav12(0);
            }}
          >
            <Link to="/">기본설정</Link>
          </li>
          <li
            className={settingNav12 === 1 ? "navListActive" : "navlist"}
            onClick={() => {
              setSettingNav1(0);
              setSettingNav2(0);
              setSettingNav3(0);
              setSettingNav4(0);
              setSettingNav5(0);
              setSettingNav6(0);
              setSettingNav7(0);
              setSettingNav8(0);
              setSettingNav9(0);
              setSettingNav10(0);
              setSettingNav11(0);
              setSettingNav12(1);
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

import React from "react";
import {useReducer, useState} from "react";
import { Link } from "react-router-dom";


export default function HEADER() {
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
        <h1>Godomall 5</h1>
      </div>

      <div className="gnbTop">
        <ul className="list1">
          <li>
            <div className="user">
              <a href="/">
                전체 관리자 <span>님</span> (proad00)
              </a>
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
          <Link to="/home" className={settingNav1 === 1 ? "navListActive" : "navlist"} onClick={() => {
              setSettingNav1(1); setSettingNav2(0); setSettingNav3(0); setSettingNav4(0); setSettingNav5(0);
              setSettingNav6(0); setSettingNav7(0); setSettingNav8(0); setSettingNav9(0); setSettingNav10(0);
              setSettingNav11(0); setSettingNav12(0);
            } }>
            <div className="topLinkText">기본설정</div>
          </Link>

          <Link to="/Goods" className={settingNav2 === 1 ? "navListActive" : "navlist"} onClick={() => {
            setSettingNav1(0); setSettingNav2(1); setSettingNav3(0); setSettingNav4(0); setSettingNav5(0);
            setSettingNav6(0); setSettingNav7(0); setSettingNav8(0); setSettingNav9(0); setSettingNav10(0);
            setSettingNav11(0); setSettingNav12(0);
          } }>
            <div className="topLinkText">상품</div>
          </Link>

          <Link to="/Order" className={settingNav3 === 1 ? "navListActive" : "navlist"} onClick={() => {
            setSettingNav1(0); setSettingNav2(0); setSettingNav3(1); setSettingNav4(0); setSettingNav5(0);
            setSettingNav6(0); setSettingNav7(0); setSettingNav8(0); setSettingNav9(0); setSettingNav10(0);
            setSettingNav11(0); setSettingNav12(0);
          } }>
            <div className="topLinkText">주문/배송</div>
          </Link>

          <Link to="/" className={settingNav4 === 1 ? "navListActive" : "navlist"} onClick={() => {
            setSettingNav1(0); setSettingNav2(0); setSettingNav3(0); setSettingNav4(1); setSettingNav5(0);
            setSettingNav6(0); setSettingNav7(0); setSettingNav8(0); setSettingNav9(0); setSettingNav10(0);
            setSettingNav11(0); setSettingNav12(0);
          } }>
            <div className="topLinkText">회원</div>
          </Link>

          <Link to="/" className={settingNav5 === 1 ? "navListActive" : "navlist"} onClick={() => {
            setSettingNav1(0); setSettingNav2(0); setSettingNav3(0); setSettingNav4(0); setSettingNav5(1);
            setSettingNav6(0); setSettingNav7(0); setSettingNav8(0); setSettingNav9(0); setSettingNav10(0);
            setSettingNav11(0); setSettingNav12(0);
          } }>
            <div className="topLinkText">게시판</div>
          </Link>

          <Link to="/" className={settingNav6 === 1 ? "navListActive" : "navlist"} onClick={() => {
            setSettingNav1(0); setSettingNav2(0); setSettingNav3(0); setSettingNav4(0); setSettingNav5(0);
            setSettingNav6(1); setSettingNav7(0); setSettingNav8(0); setSettingNav9(0); setSettingNav10(0);
            setSettingNav11(0); setSettingNav12(0);
          } }>
            <div className="topLinkText">프로모션</div>
          </Link>

          <Link to="/"i className={settingNav7 === 1 ? "navListActive" : "navlist"} onClick={() => {
            setSettingNav1(0); setSettingNav2(0); setSettingNav3(0); setSettingNav4(0); setSettingNav5(0);
            setSettingNav6(0); setSettingNav7(1); setSettingNav8(0); setSettingNav9(0); setSettingNav10(0);
            setSettingNav11(0); setSettingNav12(0);
          } }>
            <div className="topLinkText">디자인</div>
          </Link>

          <Link to="/" className={settingNav8 === 1 ? "navListActive" : "navlist"} onClick={() => {
            setSettingNav1(0); setSettingNav2(0); setSettingNav3(0); setSettingNav4(0); setSettingNav5(0);
            setSettingNav6(0); setSettingNav7(0); setSettingNav8(1); setSettingNav9(0); setSettingNav10(0);
            setSettingNav11(0); setSettingNav12(0);
          } }>
            <div className="topLinkText">부가서비스</div>
          </Link>

          <Link to="/" className={settingNav9 === 1 ? "navListActive" : "navlist"} onClick={() => {
            setSettingNav1(0); setSettingNav2(0); setSettingNav3(0); setSettingNav4(0); setSettingNav5(0);
            setSettingNav6(0); setSettingNav7(0); setSettingNav8(0); setSettingNav9(1); setSettingNav10(0);
            setSettingNav11(0); setSettingNav12(0);
          } }>
            <div className="topLinkText">마케팅</div>
          </Link>

          <Link to="/" className={settingNav10 === 1 ? "navListActive" : "navlist"} onClick={() => {
            setSettingNav1(0); setSettingNav2(0); setSettingNav3(0); setSettingNav4(0); setSettingNav5(0);
            setSettingNav6(0); setSettingNav7(0); setSettingNav8(0); setSettingNav9(0); setSettingNav10(1);
            setSettingNav11(0); setSettingNav12(0);
          } }>
            <div className="topLinkText">모바일샵</div>
          </Link>

          <Link to="/" className={settingNav11 === 1 ? "navListActive" : "navlist"} onClick={() => {
            setSettingNav1(0); setSettingNav2(0); setSettingNav3(0); setSettingNav4(0); setSettingNav5(0);
            setSettingNav6(0); setSettingNav7(0); setSettingNav8(0); setSettingNav9(0); setSettingNav10(0);
            setSettingNav11(1); setSettingNav12(0);
          } }>
            <div className="topLinkText">통계</div>
          </Link>

          <Link to="/" className={settingNav12 === 1 ? "navListActive" : "navlist"} onClick={() => {
            setSettingNav1(0); setSettingNav2(0); setSettingNav3(0); setSettingNav4(0); setSettingNav5(0);
            setSettingNav6(0); setSettingNav7(0); setSettingNav8(0); setSettingNav9(0); setSettingNav10(0);
            setSettingNav11(0); setSettingNav12(1);
          } }>
            <div className="topLinkText">모바일앱</div>
          </Link>
          
        </ul>
      </div>
      </div>
  );
}

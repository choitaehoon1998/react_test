import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import { useResultContext } from "../../Context";


export default function HEADER() {
  const [menuNav, setMenuNav] = useState(0); // 헤더 style 변경 state
  const {setSideMenu} = useResultContext();

  const setMenu = (navLocation) => { 
    setMenuNav(navLocation);  // 헤더 style 변경 함수
    setSideMenu(navLocation); // sidebar 변경 state
  }

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
          <Link to="/home" className={menuNav === 1 ? "navListActive" : "navlist"} onClick={() => {
            setMenu(1);
            }}>
            <div className="topLinkText">기본설정</div>
          </Link>

          <Link to="/Goods" className={menuNav === 2 ? "navListActive" : "navlist"} onClick={() => {
            setMenu(2);
            }}>
            <div className="topLinkText">상품</div>
          </Link>

          <Link to="/Order" className={menuNav === 3 ? "navListActive" : "navlist"} onClick={() => {
            setMenu(3);
          } }>
            <div className="topLinkText">주문/배송</div>
          </Link>

          <Link to="/" className={menuNav === 4 ? "navListActive" : "navlist"} onClick={() => {
            setMenu(4);
          } }>
            <div className="topLinkText">회원</div>
          </Link>

          <Link to="/" className={menuNav === 5 ? "navListActive" : "navlist"} onClick={() => {
            setMenu(5);
          } }>
            <div className="topLinkText">게시판</div>
          </Link>

          <Link to="/" className={menuNav === 6 ? "navListActive" : "navlist"} onClick={() => {
            setMenu(6);
          } }>
            <div className="topLinkText">프로모션</div>
          </Link>

          <Link to="/"i className={menuNav === 7 ? "navListActive" : "navlist"} onClick={() => {
            setMenu(7);
          } }>
            <div className="topLinkText">디자인</div>
          </Link>

          <Link to="/" className={menuNav === 8 ? "navListActive" : "navlist"} onClick={() => {
            setMenu(8);
          } }>
            <div className="topLinkText">부가서비스</div>
          </Link>

          <Link to="/" className={menuNav === 9 ? "navListActive" : "navlist"} onClick={() => {
            setMenu(9);
          } }>
            <div className="topLinkText">마케팅</div>
          </Link>

          <Link to="/" className={menuNav === 10 ? "navListActive" : "navlist"} onClick={() => {
            setMenu(10);
          } }>
            <div className="topLinkText">모바일샵</div>
          </Link>

          <Link to="/" className={menuNav === 11 ? "navListActive" : "navlist"} onClick={() => {
            setMenu(11);
          } }>
            <div className="topLinkText">통계</div>
          </Link>

          <Link to="/" className={menuNav === 12 ? "navListActive" : "navlist"} onClick={() => {
            setMenu(12);
          } }>
            <div className="topLinkText">모바일앱</div>
          </Link>
          
        </ul>
      </div>
      </div>
  );
}

import { BrowserRouter, Link, Route } from "react-router-dom";
import { useState } from "react";

function Sidemenu() {
  const [list1, setList1] = useState(0);
  const [list2, setList2] = useState(0);
  const [list3, setList3] = useState(0);
  const [list4, setList4] = useState(0);
  const [closeList, setCloseList] = useState(0);

  return (
    <>
      <div
        className={closeList == 1 ? "listbutActive" : "listbut"}
        onClick={() => {
          if (closeList == 0) {
            setCloseList(1);
          } else if (closeList == 1) {
            setCloseList(0);
          }
        }}
      ></div>
      <div className={closeList == 1 ? "gnb-sideMenuActive" : "gnb-sideMenu"}>
        <div className="sideMenuName">
          <p>기본</p>
        </div>
        <div
          className="listname"
          onClick={() => {
            if (list1 === 0) {
              setList1(1);
            } else if (list1 === 1) {
              setList1(0);
            }
          }}
        >
          설정 관리
        </div>
        <ul className={list1 ? "hide-menu" : "show-menu"}>
          <li>
            <Link to="/">설정관리</Link>
          </li>
          <li>
            <Link to="/">설정관리2</Link>
          </li>
          <li>
            <Link to="/">상품관리3</Link>
          </li>
          <li>
            <Link to="/">상품관리4</Link>
          </li>
          <li>
            <Link to="/">상품관리5</Link>
          </li>
          <li>
            <Link to="/">상품관리6</Link>
          </li>
          <li>
            <Link to="/">상품관리7</Link>
          </li>
        </ul>
        <div
          className="listname"
          onClick={() => {
            if (list2 === 0) {
              setList2(1);
            } else if (list2 === 1) {
              setList2(0);
            }
          }}
        >
          상품 관리
        </div>
        <ul className={list2 ? "hide-menu" : "show-menu"}>
          <li>
            <Link to="/">상품관리1</Link>
          </li>
          <li>
            <Link to="/">상품관리2</Link>
          </li>
          <li>
            <Link to="/">상품관리3</Link>
          </li>
          <li>
            <Link to="/">상품관리4</Link>
          </li>
          <li>
            <Link to="/">상품관리5</Link>
          </li>
          <li>
            <Link to="/">상품관리6</Link>
          </li>
          <li>
            <Link to="/">상품관리7</Link>
          </li>
        </ul>
        <div
          className="listname"
          onClick={() => {
            if (list3 === 0) {
              setList3(1);
            } else if (list3 === 1) {
              setList3(0);
            }
          }}
        >
          상품 관리
        </div>
        <ul className={list3 ? "hide-menu" : "show-menu"}>
          <li>
            <Link to="/">상품관리1</Link>
          </li>
          <li>
            <Link to="/">상품관리2</Link>
          </li>
          <li>
            <Link to="/">상품관리3</Link>
          </li>
          <li>
            <Link to="/">상품관리4</Link>
          </li>
          <li>
            <Link to="/">상품관리5</Link>
          </li>
          <li>
            <Link to="/">상품관리6</Link>
          </li>
          <li>
            <Link to="/">상품관리7</Link>
          </li>
        </ul>
        <div
          className="listname"
          onClick={() => {
            if (list4 === 0) {
              setList4(1);
            } else if (list4 === 1) {
              setList4(0);
            }
          }}
        >
          상품 관리
        </div>
        <ul className={list4 ? "hide-menu" : "show-menu"}>
          <li>
            <Link to="/">상품관리1</Link>
          </li>
          <li>
            <Link to="/">상품관리2</Link>
          </li>
          <li>
            <Link to="/">상품관리3</Link>
          </li>
          <li>
            <Link to="/">상품관리4</Link>
          </li>
          <li>
            <Link to="/">상품관리5</Link>
          </li>
          <li>
            <Link to="/">상품관리6</Link>
          </li>
          <li>
            <Link to="/">상품관리7</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidemenu;

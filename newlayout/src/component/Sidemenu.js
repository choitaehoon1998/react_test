import { BrowserRouter, Link, Route } from "react-router-dom";
import { useState } from "react";

function Sidemenu() {
  // // 토글 메뉴

  // const [isOpen, setMenu] = useState(false);

  // const toggleMenu = () => {
  //   setMenu((isOpen) => !isOpen); // 상태값 반전 boolean
  // };
  //usestate를 쓰고 상태값 반전으로 버튼을 만들었는데 전체로 적용되서 해결법을 잘 모르겠습니다...

  const [list1, setList1] = useState(0);
  const [list2, setList2] = useState(0);
  const [list3, setList3] = useState(0);
  const [list4, setList4] = useState(0);

  return (
    <div className="content-wrap">
      <div className="gnb-sideMenu">
        <div className="sideMenuName">
          <img></img>
          <p>상품</p>
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
          상품 관리
        </div>
        <ul className={list1 === 1 ? "hide-menu" : "show-menu"}>
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
    </div>
  );
}

export default Sidemenu;

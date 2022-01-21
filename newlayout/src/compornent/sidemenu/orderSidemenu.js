import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ORDERSIDEMENU() {
const[side, setSide]=useState(0);
const[itemList, setItemList]=useState(0);
const[item1, setItem1]=useState(0);
const[item2, setItem2]=useState(0);
const[item3, setItem3]=useState(0);
  return (
      <><div className={side===1?"sideButton-ac" : "sideButton"} onClick={() => {
        if (side === 0) {
          setSide(1); 
        } else if (side === 1) {
          setSide(0); 
        }
      }} ></div>

      <div className={side === 1 ? "itemList-hidden" : ""}>
      <div className={itemList === 1 ? "itemListButton-ac":"itemListButton"} onClick={() => {
        if(itemList === 0){
          setItemList(1); setItem1(1); setItem2(1); setItem3(1);
        }else if(itemList === 1){
          setItemList(0); setItem1(0); setItem2(0); setItem3(0);
        }
      }}></div>
      </div>

      <div className={side === 1 ?"gnb-sideMenu-ac" : "gnb-sideMenu"}>
      <div className="sideMenuName">
        <h2>주문/배송</h2>
      </div>

      <div className={item1 === 1 ? "listname-active" : "listname"} onClick={() => {
        if (item1 === 0) {
          setItem1(1);
        } else if (item1 === 1) {
          setItem1(0);
        }
      } }>주문관리</div>
      <ul className={item1 === 1 ? "listGroup" : "listGroup-hidden"}>
        <li>
          <Link to="" className="sideMenuText">주문통합리스트</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">입금대기 리스트</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">결제완료 리스트</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">상품준비중 리스트</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">배송중 리스트</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">배송완료 리스트</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">구매확정 리스트</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">주문 내역 삭제</Link>
        </li>
      </ul>
      <div className={item2 === 1 ? "listname-active" : "listname"} onClick={() => {
        if (item2 === 0) {
          setItem2(1);
        } else if (item2 === 1) {
          setItem2(0);
        }
      } }>취소/교환/반품/환불 관리</div>
      <ul className={item2 === 1 ? "listGroup" : "listGroup-hidden"}>
        <li>
          <Link to="" className="sideMenuText">취소 리스트</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">교환 리스트</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">반품 리스트</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">환불 리스트</Link>
        </li>

      </ul>
      <div className={item3 === 1 ? "listname-active" : "listname"} onClick={() => {
        if (item3 === 0) {
          setItem3(1);
        } else if (item3 === 1) {
          setItem3(0);
        }
      } }>추가주문 관리</div>
      <ul className={item3 === 1 ? "listGroup" : "listGroup-hidden"}>
        <li>
          <Link to="" className="sideMenuText">추가주문 등록</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">자주쓰는 주소 관리</Link>
        </li>
        

      </ul>
    </div></>
    
  );
}


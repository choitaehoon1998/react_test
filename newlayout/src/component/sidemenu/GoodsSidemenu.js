import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function GoodsSIDEMENU() {
const[side, setSide]=useState(0);
const[itemList, setItemList]=useState(0);
const[item1, setItem1]=useState(0);
const[item2, setItem2]=useState(0);
const[item3, setItem3]=useState(0);
  return (
      <>
      <div className={side===1?"sideButton-ac" : "sideButton"} onClick={() => {
        if (side === 0) {
          setSide(1);
        } else if (side === 1) {
          setSide(0);
        }
      }} >
      </div>
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
        <h2>상품</h2>
      </div>

      <div className={item1 === 1 ? "listname-active" : "listname"} onClick={() => {
        if (item1 === 0) {
          setItem1(1);
        } else if (item1 === 1) {
          setItem1(0);
        }
      } }>상품 관리</div>
      <ul className={item1 === 1 ? "listGroup" : "listGroup-hidden"}>
        <li >
          <Link to="" className="sideMenuText">상품 리스트</Link>
        </li>
        <li >
          <Link to="" className="sideMenuText">상품 등록</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">옵션 관리</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">상품 혜택 관리</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">상품 아이콘 관리</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">상품 정보 관리</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">삭제 상품 관리</Link>
        </li>
      </ul>
      <div className={item2 === 1 ? "listname-active" : "listname"} onClick={() => {
        if (item2 === 0) {
          setItem2(1);
        } else if (item2 === 1) {
          setItem2(0);
        }
      } }>상품 일괄 관리</div>
      <ul className={item2 === 1 ? "listGroup" : "listGroup-hidden"}>
        <li>
          <Link to="" className="sideMenuText" >상품 가격 관리</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">상품 마일리지/혜택 관리</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">상품 아이콘/대표색상 관리</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">상품 배송비 관리</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">상품 이미지 일괄 처리</Link>
        </li>

      </ul>
      <div className={item3 === 1 ? "listname-active" : "listname"} onClick={() => {
        if (item3 === 0) {
          setItem3(1);
        } else if (item3 === 1) {
          setItem3(0);
        }
      } }>상품 분류 관리</div>
      <ul className={item3 === 1 ? "listGroup" : "listGroup-hidden"}>
        <li>
          <Link to="" className="sideMenuText">분류 설정 관리</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">카테고리 관리</Link>
        </li>
        <li>
          <Link to="" className="sideMenuText">브랜드 관리</Link>
        </li>
      </ul>
    </div></>
    
  );
}


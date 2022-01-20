import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SidetoggleBut from "./SideToggle/SidetoggleBut";
import SideListLink from "./SideListLink";

export default function HOMESIDEMENU(props) {
  const [side, setSide] = useState(0);
  const [itemList, setItemList] = useState(0);
  const [item1, setItem1] = useState(0);
  const [item2, setItem2] = useState(0);
  const [item3, setItem3] = useState(0);

  return (
    <>
      <div
        className={side === 1 ? "sideButton-ac" : "sideButton"}
        onClick={() => {
          if (side === 0) {
            setSide(1);
          } else if (side === 1) {
            setSide(0);
          }
        }}
      ></div>
      {/* <SidetoggleBut /> */}
      <div className={side === 1 ? "itemList-hidden" : ""}>
        <div
          className={itemList === 1 ? "itemListButton-ac" : "itemListButton"}
          onClick={() => {
            if (itemList === 0) {
              setItemList(1);
              setItem1(1);
              setItem2(1);
              setItem3(1);
            } else if (itemList === 1) {
              setItemList(0);
              setItem1(0);
              setItem2(0);
              setItem3(0);
            }
          }}
        ></div>
      </div>

      <div className={side === 1 ? "gnb-sideMenu-ac" : "gnb-sideMenu"}>
        <div className="sideMenuName">
          <h2>기본설정</h2>
        </div>

        <div
          className={item1 === 1 ? "listname-active" : "listname"}
          onClick={() => {
            if (item1 === 0) {
              setItem1(1);
            } else if (item1 === 1) {
              setItem1(0);
            }
          }}
        >
          기본정책
        </div>
        <ul className={item1 === 1 ? "listGroup" : "listGroup-hidden"}>
          <li>
            {/* <Link to="" className="sideMenuText">
              기본 정보 설정
            </Link> */}
          </li>
          <li>
            <Link to="" className="sideMenuText">
              약관/개인정보처리방침
            </Link>
          </li>
          <li>
            <Link to="" className="sideMenuText">
              이용/탈퇴 안내
            </Link>
          </li>
          <li>
            <Link to="" className="sideMenuText">
              금액/단위 기준 설정
            </Link>
          </li>
          <li>
            <Link to="" className="sideMenuText">
              파일 저장소 관리
            </Link>
          </li>
          <li>
            <Link to="" className="sideMenuText">
              코드 관리
            </Link>
          </li>
          <li>
            <Link to="" className="sideMenuText">
              외부 스크립트 관리
            </Link>
          </li>
        </ul>
        <div
          className={item2 === 1 ? "listname-active" : "listname"}
          onClick={() => {
            if (item2 === 0) {
              setItem2(1);
            } else if (item2 === 1) {
              setItem2(0);
            }
          }}
        >
          관리 정책
        </div>
        <ul className={item2 === 1 ? "listGroup" : "listGroup-hidden"}>
          <li>
            <Link to="" className="sideMenuText">
              운영자 관리
            </Link>
          </li>
          <li>
            <Link to="" className="sideMenuText">
              운영자 권한 설정
            </Link>
          </li>
          <li>
            <Link to="" className="sideMenuText">
              운영 보안 설정
            </Link>
          </li>
          <li>
            <Link to="" className="sideMenuText">
              쇼핑몰 이용 설정
            </Link>
          </li>
          <li>
            <Link to="" className="sideMenuText">
              비밀번호 찾기 설정
            </Link>
          </li>
          <li>
            <Link to="" className="sideMenuText">
              비밀번호 변경안내 설정
            </Link>
          </li>
        </ul>
        <div
          className={item3 === 1 ? "listname-active" : "listname"}
          onClick={() => {
            if (item3 === 0) {
              setItem3(1);
            } else if (item3 === 1) {
              setItem3(0);
            }
          }}
        >
          해외상점
        </div>
        <ul className={item3 === 1 ? "listGroup" : "listGroup-hidden"}>
          <li>
            <Link to="" className="sideMenuText">
              상품 기본 설정
            </Link>
          </li>
          <li>
            <Link to="" className="sideMenuText">
              상품 이미지 사이즈 설정
            </Link>
          </li>
          <li>
            <Link to="" className="sideMenuText">
              상품 상세 이용안내 관리
            </Link>
          </li>
          <li>
            <Link to="" className="sideMenuText">
              최근 본 상품 설정
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

// form 탬플릿 페이지입니다.

// 아래 목록은 터미널에서 다운로드하는 컴포넌트 목록입니다. 설치해주세요.
// npm install react-tagsinput --legacy-peer-deps 
// npm install formik --save
// npm i yup
// npm install react-datepicker --save
// npm i react-select

import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { useState } from "react";

// css
import "../component/form/formcompo-style.css";

// 컴포넌트 import
import NameInput from "../component/form/nameinput";
import EmailInput from "../component/form/emailinput";
import SmmitBnt from "../component/form/smmitbnt";
import TextArea from "../component/form/textarea";

// 페이지 내용 시작
export default function Validation() {
  return (
    <div className="content-wrap">
      <div className="content">
        <div className="content-main">
          <div className="content-tit">
            <h2>Validation</h2>
          </div>

          {/* 왼쪽 프레임 */}
          <div className="left-frame">
            <label>Formik Validation</label>

            {/* form 기본 */}
            <div className="form-frame frame1">
              <label >Field Level Validation</label>
              <div className="form-groups">
                <label>Name</label>
                <NameInput />
              </div>
              <div className="form-groups">
                <label>Email</label>
                <EmailInput />
              </div>
              <SmmitBnt mame="Smmit"></SmmitBnt>
            </div>

            {/* form 기본 2 */}

            <div className="form-frame frame1">
              <label >Form Level Validation</label>
              <div className="form-groups">
                <label>Name</label>
                <NameInput />
              </div>
              <div className="form-groups">
                <label>Email</label>
                <EmailInput />
              </div>
              <SmmitBnt mame="Smmit"></SmmitBnt>
            </div>

            {/* Validation Schema with Yup */}
            <div className="form-frame frame1">

              <label >Validation Schema with Yup</label>

              <div className="form-groups">
                <label>first Name</label>
                <NameInput />
              </div>

              <div className="form-groups">
                <label>last Name</label>
                <NameInput />
              </div>

              <div className="form-groups">
                <label>Email</label>
                <EmailInput />
              </div>

              <div className="form-groups">
                <label>Details</label>
                  <TextArea />
              </div>

              <SmmitBnt mame="Smmit"></SmmitBnt>
            
            </div>
          </div>

          {/* 오른쪽 프레임 */}
          <div className="right-frame">
            
          </div>

          {/* 아래 프레임 */}
          <div className="bottom-frame"></div>
        </div>
      </div>
    </div>
  );
}

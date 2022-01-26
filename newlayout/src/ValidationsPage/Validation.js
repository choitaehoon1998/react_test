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
import DropSelect from "../component/form/DropSelect";
import ReactSelectFix from "../component/form/ReactSelectFix";
import CheckBox from "../component/form/checkbox";
import RadioBox from "../component/form/radiobox";
import Tagsinput from "../component/form/Tagsinput";
import Switch from "../component/form/Switch";
import CustomDatepicker from "../component/form/CustomDatepicker";
import TooltipPositon from "../component/form/TooltipPositon";
import Rank from "../component/form/Rank";
import NumberInput from "../component/form/numberinput";
import Mininput from "../component/form/Mininput";
import MaxInput from "../component/form/maxinput";

// 페이지 내용 시작
export default function Validation() {
  return (
    <div className="content-wrap">
      <div className="content">
        <div className="content-main">
          <div className="content-tit">
            <h2>Validation</h2>
          </div>

          <div className="main-flex">
            <div className="left-frame">
              <label>Formik Validation</label>

              {/* form 기본 */}
              <div className="form-frame frame">
                <div className="card">
                  <form action="#">
                    <label>Field Level Validation</label>
                    <div className="form-groups">
                      <label>Name</label>
                      <NameInput />
                    </div>
                    <div className="form-groups">
                      <label>Email</label>
                      <EmailInput />
                    </div>
                    <SmmitBnt name="Smmit"></SmmitBnt>
                  </form>
                </div>
              </div>

              {/* form 기본 2 */}
              <div className="form-frame frame">
                <div className="card">
                  <form action="#">
                    <label>Form Level Validation</label>
                    <div className="form-groups">
                      <label>Name</label>
                      <NameInput />
                    </div>
                    <div className="form-groups">
                      <label>Email</label>
                      <EmailInput />
                    </div>
                    <SmmitBnt name="Smmit"></SmmitBnt>
                  </form>
                </div>
              </div>

              {/* Validation Schema with Yup */}
              <div className="form-frame frame">
                <div className="card">
                  <form action="#">
                    <label>Validation Schema with Yup</label>
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
                    <SmmitBnt name="Smmit"></SmmitBnt>
                  </form>
                </div>
              </div>

              {/* Custom Components and Layouts with Yup */}
              <div className="form-frame frame">
                <div className="card">
                  <form action="#">
                    <label>Validation Schema with Yup</label>
                    <div className="form-groups">
                      <label>Email</label>
                      <EmailInput />
                    </div>
                    <div className="form-groups">
                      <label>Select</label>
                      <DropSelect />
                    </div>
                    <div className="form-groups">
                      <label>React Select</label>
                      <ReactSelectFix />
                    </div>
                    <div className="form-groups">
                      <label>Single Checkbox</label>
                      <CheckBox>Agree to something</CheckBox>
                    </div>
                    <div className="form-groups">
                      <label>Custom Single Checkbox</label>
                      <CheckBox id="chbox1">Agree to something</CheckBox>
                    </div>
                    <div className="form-groups">
                      <label>Checkbox Group</label>
                      <div className="flexbox">
                        <CheckBox id="chbox1">food</CheckBox>
                        <CheckBox id="chbox2">cookie</CheckBox>
                        <CheckBox id="chbox3">cake</CheckBox>
                        <CheckBox id="chbox4">apple</CheckBox>
                        <CheckBox id="chbox5">sorce</CheckBox>
                      </div>
                    </div>
                    <div className="form-groups">
                      <label>Custom Checkbox Group</label>
                      <div className="flexbox">
                        <CheckBox id="chbox1">food</CheckBox>
                        <CheckBox id="chbox2">cookie</CheckBox>
                        <CheckBox id="chbox3">cake</CheckBox>
                        <CheckBox id="chbox4">apple</CheckBox>
                        <CheckBox id="chbox5">sorce</CheckBox>
                      </div>
                    </div>
                    <div className="form-groups">
                      <label>radio Group</label>
                      <div className="flexbox">
                        <RadioBox id="chbox1">food</RadioBox>
                        <RadioBox id="chbox2">cookie</RadioBox>
                        <RadioBox id="chbox3">cake</RadioBox>
                        <RadioBox id="chbox4">apple</RadioBox>
                        <RadioBox id="chbox5">sorce</RadioBox>
                      </div>
                    </div>
                    <div className="form-groups">
                      <label>Custom Rradio Group</label>
                      <div className="flexbox">
                        <RadioBox id="chbox1">food</RadioBox>
                        <RadioBox id="chbox2">cookie</RadioBox>
                        <RadioBox id="chbox3">cake</RadioBox>
                        <RadioBox id="chbox4">apple</RadioBox>
                        <RadioBox id="chbox5">sorce</RadioBox>
                      </div>
                    </div>
                    <div className="form-groups">
                      <label>Tags</label>
                      <Tagsinput />
                    </div>
                    <div className="form-groups">
                      <label>Switch</label>
                      <Switch />
                    </div>
                    <div className="form-groups">
                      <label>Date Picker</label>
                      <CustomDatepicker />
                    </div>
                    <SmmitBnt name="Smmit"></SmmitBnt>
                  </form>
                </div>
              </div>
              {/* Top Labels Over Line */}
              <div className="form-frame frame">
                <div className="card">
                  <form action="#">
                    <label>Top Labels Over Line</label>
                    <div className="form-groups has-float-label">
                      <label className="lable-font">Email</label>
                      <EmailInput />
                    </div>
                    <div className="form-groups has-float-label">
                      <label className="lable-font">password</label>
                      <EmailInput />
                    </div>
                    <div className="form-groups has-float-label">
                      <label className="lable-font">Tags</label>
                      <Tagsinput />
                    </div>
                    <div className="form-groups has-float-label">
                      <label className="lable-font">Date</label>
                      <CustomDatepicker />
                    </div>
                    <div className="form-groups has-float-label">
                      <label className="lable-font">Select</label>
                      <DropSelect />
                    </div>

                    <SmmitBnt name="Smmit"></SmmitBnt>
                  </form>
                </div>
              </div>
              {/* Top Labels Over Line */}
              <div className="form-frame frame">
                <div className="card">
                  <form action="#">
                    <label>Top Labels In Input</label>
                    <div className="form-groups has-top-label">
                      <label className="lable-font">Email</label>
                      <EmailInput />
                    </div>
                    <div className="form-groups has-top-label">
                      <label className="lable-font">password</label>
                      <EmailInput />
                    </div>
                    <div className="form-groups has-top-label">
                      <label className="lable-font">Tags</label>
                      <Tagsinput />
                    </div>
                    <div className="form-groups has-top-label">
                      <label className="lable-font">Date</label>
                      <CustomDatepicker />
                    </div>
                    <div className="form-groups has-top-label">
                      <label className="lable-font"></label>
                      <DropSelect />
                    </div>

                    <SmmitBnt name="Smmit"></SmmitBnt>
                  </form>
                </div>
              </div>
            </div>

            {/* Basic */}
            <div className="right-frame">
              <label>Availity Reactstrap Validation</label>
              <div className="form-frame frame">
                <div className="card">
                  <form action="#">
                    <label>Basic</label>
                    <div className="form-groups">
                      <label>Name</label>
                      <NameInput />
                    </div>
                    <div className="form-groups">
                      <label>Rank</label>
                      <Rank />
                    </div>
                    <div className="form-groups">
                      <label>Option</label>
                      <DropSelect />
                    </div>
                    <div className="form-groups">
                      <label>Custom Radio Buttons</label>
                      <RadioBox id="chbox5">sorce</RadioBox>
                      <RadioBox id="chbox5">cake</RadioBox>
                      <RadioBox id="chbox5">dessert</RadioBox>
                    </div>
                    <div className="form-groups">
                      <label>CUstom Checkbox</label>
                      <div className="flexbox">
                        <CheckBox id="chbox1">yes</CheckBox>
                        <CheckBox id="chbox2">no</CheckBox>
                      </div>
                    </div>

                    <SmmitBnt name="Smmit"></SmmitBnt>
                  </form>
                </div>
              </div>

              {/* Custom Rules  */}
              <div className="form-frame frame">
                <div className="card">
                  <form action="#">
                    <label>Custom Rules</label>
                    <div className="form-groups">
                      <label>Name</label>
                      <NameInput />
                    </div>
                    <div className="form-groups">
                      <label>Email</label>
                      <EmailInput />
                    </div>
                    <div className="form-groups">
                      <label>Email again</label>
                      <EmailInput />
                    </div>
                    <div className="form-groups">
                      <label>Number</label>
                      <NumberInput />
                    </div>
                    <div className="form-groups">
                      <label>Max</label>
                      <MaxInput />
                    </div>
                    <div className="form-groups">
                      <label>Min</label>
                      <Mininput />
                    </div>
                    <div className="form-groups">
                      <label>Regex (^[A-Z]*$)</label>
                    </div>

                    <SmmitBnt name="Smmit"></SmmitBnt>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* 왼쪽 프레임 */}

          {/* 아래 프레임 */}
          <div className="bottom-frame">
            <label>Tooltip Positioning</label>

            <TooltipPositon></TooltipPositon>
          </div>
        </div>
      </div>
    </div>
  );
}

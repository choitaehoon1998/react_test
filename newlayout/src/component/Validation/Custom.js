import React, { useState } from "react";
import CustomDatepicker from "./component/CustomDatepicker";
import ReactSelectFix from "./component/ReactSelectFix";
import DropSelect from "./component/DropSelect";
import Switch from "./component/Switch";
import Tagsinput from "./component/Tagsinput";

export default function Custom() {
  return (
    <div className="form-frame frame">
      <div className="card">
        <form action="#">
          {/* 일반 input */}
          <label>Custom Components and Layouts with Yup</label>

          <div className="form-groups">
            <label className="lable-font">Email</label>
            <input
              name="email"
              className="form-control"
              value={"test@test.com"}
            ></input>
          </div>

          {/* select 시작 */}
          <div className=" form-groups">
            <label className="lable-font">select</label>
            <DropSelect />
            <div className="feedBack">Please enter your email</div>
          </div>

          <div className=" form-groups">
            <label className="lable-font">React Select</label>
            <ReactSelectFix />
            <div className="feedBack">Pick at least 3 tags</div>
          </div>

          {/*    체크박스 시작 */}

          {/* 싱글체크박스 */}
          <div className="form-groups">
            <label className="lable-font">Single Checkbox</label>
            <div className="line">
              <input
                type={"checkbox"}
                name="single checkbox"
                className="ck-position form-control"
              ></input>
              <label className="label-font-second">Agree to something</label>
            </div>
            <div className="feedBack">Must agree to something</div>
          </div>

          {/* 커스텀 체크박스 */}
          <div className="form-groups">
            <label className="lable-font">Custom Checkbox</label>
            <div className="line">
              <input
                type={"checkbox"}
                name="Custom-checkbox"
                className="custom-control-input"
                id="Custom-checkbox"
              ></input>
              <label
                className="custom-control-input"
                for="Custom-checkbox"
              ></label>
              <label className="label-font-second">Agree to something</label>
            </div>
            <div className="feedBack">Must agree to something</div>
          </div>

          {/* 체크박스 그룹 */}
          <div className="form-groups">
            <label className="lable-font">Checkbox Group</label>
            <fieldset>
              <div className="ckbox-group">
                <input
                  type={"checkbox"}
                  name="Checkbox Group"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">flower</label>
              </div>
              <div className="ckbox-group">
                <input
                  type={"checkbox"}
                  name="Checkbox Group"
                  className="form-control ck-position"
                  disabled="disabled"
                ></input>
                <label className="label-font-second">ball</label>
              </div>
              <div className="ckbox-group">
                <input
                  type={"checkbox"}
                  name="Checkbox Group"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">cookie</label>
              </div>
              <div className="ckbox-group">
                <input
                  type={"checkbox"}
                  name="Checkbox Group"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">home</label>
              </div>
            </fieldset>
          </div>

          {/* 커스텀 체크박스 */}
          <div className="form-groups">
            <label className="lable-font">Custom Checkbox gg</label>

            <div className="flex-box">
              <div className="line line2">
                <input
                  type={"checkbox"}
                  name="Custom-checkbox"
                  className="custom-control-input"
                  id="Custom-checkbox1"
                ></input>
                <label
                  className="custom-control-input"
                  for="Custom-checkbox1"
                ></label>
                <label className="label-font-second">Agree to something</label>
              </div>

              <div className="line line2">
                <input
                  type={"checkbox"}
                  name="Custom-checkbox"
                  className="custom-control-input"
                  id="Custom-checkbox2"
                ></input>
                <label
                  className="custom-control-input"
                  for="Custom-checkbox2"
                ></label>
                <label className="label-font-second">Agree to something</label>
              </div>

              <div className="line line2">
                <input
                  type={"checkbox"}
                  name="Custom-checkbox"
                  className="custom-control-input"
                  id="Custom-checkbox3"
                ></input>
                <label
                  className="custom-control-input"
                  for="Custom-checkbox3"
                ></label>
                <label className="label-font-second">Agree to something</label>
              </div>
              <div className="line line2">
                <input
                  type={"checkbox"}
                  name="Custom-checkbox"
                  className="custom-control-input"
                  id="Custom-checkbox4"
                ></input>
                <label
                  className="custom-control-input"
                  for="Custom-checkbox4"
                ></label>
                <label className="label-font-second">Agree to something</label>
              </div>
            </div>
            <div className="feedBack">Must agree to something</div>
          </div>

          {/* 체크박스 타입 radio */}
          <div className="form-groups">
            <label className="lable-font">Radio Groups</label>
            <fieldset>
              <div className="ckbox-group">
                <input
                  type={"radio"}
                  name="radio checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">Food</label>
              </div>
              <div className="ckbox-group">
                <input
                  type={"radio"}
                  name="radio checkbox"
                  className="form-control ck-position"
                  disabled="disabled"
                ></input>
                <label className="label-font-second">flower</label>
              </div>
              <div className="ckbox-group">
                <input
                  type={"radio"}
                  name="radio checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">ball</label>
              </div>
              <div className="ckbox-group">
                <input
                  type={"radio"}
                  name="radio checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">cookie</label>
              </div>
              <div className="ckbox-group">
                <input
                  type={"radio"}
                  name="radio checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">home</label>
              </div>
            </fieldset>
          </div>

          {/* 커스텀 체크박스 라디오 타입 */}
          <div className="form-groups">
            <label className="lable-font">Custom Radio group</label>

            <div className="flex-box">
              <div className="line line2">
                <input
                  type={"radio"}
                  name="Custom-radio"
                  className="custom-control-input"
                  id="Custom-radio1"
                ></input>
                <label
                  className="custom-control-input"
                  for="Custom-radio1"
                ></label>
                <label className="label-font-second">Agree to something</label>
              </div>

              <div className="line line2">
                <input
                  type={"radio"}
                  name="Custom-radio2"
                  className="custom-control-input"
                  id="Custom-radio2"
                ></input>
                <label
                  className="custom-control-input"
                  for="Custom-radio2"
                ></label>
                <label className="label-font-second">Agree to something</label>
              </div>

              <div className="line line2">
                <input
                  type={"radio"}
                  name="Custom-radio"
                  className="custom-control-input"
                  id="Custom-radio3"
                ></input>
                <label
                  className="custom-control-input"
                  for="Custom-radio3"
                ></label>
                <label className="label-font-second">Agree to something</label>
              </div>
              <div className="line line2">
                <input
                  type={"radio"}
                  name="Custom-radio"
                  className="custom-control-input"
                  id="Custom-radio4"
                ></input>
                <label
                  className="custom-control-input"
                  for="Custom-radio4"
                ></label>
                <label className="label-font-second">Agree to something</label>
              </div>
            </div>
            <div className="feedBack">Must agree to something</div>
          </div>

          {/* 태그 -오류  */}
          <div className=" form-groups">
            <label className="lable-font">Tags</label>
            <Tagsinput />
          </div>

          {/* 스위치 */}
          <div className="form-groups">
            <label className="label-font label-position">switch</label>
            <Switch />
          </div>

          {/*  datepicker */}
          <div className="form-groups">
            <label className="label-font">Date picker</label>
            <div className="react-datePicker-wrapper">
              <CustomDatepicker />
            </div>
          </div>

          <button type="submit" className="btn btn-color">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

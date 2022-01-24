import "./Validation.css";
import React, { useState } from "react";
import CustomDatepicker from "./component/CustomDatepicker";
import Tagsinput from "./component/Tagsinput";
import DropSelect from "./component/DropSelect";

export default function TopLabelsOver() {
  return (
    <>
      <div className="form-frame frame">
        <div className="card">
          <form action="#">
            <label>Top Labels Over Line</label>

            {/* 이메일 */}
            <div className="form-groups has-float-label">
              <label className="lable-font">Email</label>
              <input
                name="email"
                className="form-control"
                value={"test@test.com"}
              ></input>
            </div>

            {/* 패스워드 */}
            <div className="form-groups has-float-label">
              <label className="lable-font">password</label>
              <input
                name="password"
                className="form-control"
                value={""}
              ></input>
            </div>

            {/* 태그 */}
            <div className="form-groups has-float-label">
              <label className="lable-font">Tags</label>
              <Tagsinput />
            </div>

            {/* 날짜 */}
            <div className="form-groups has-float-label">
              <label className="label-font">Date picker</label>
              <CustomDatepicker className="form-control" />
            </div>

            {/* 리액트 셀렉션으로 교체 */}
            <div className="form-groups has-float-label">
              <label className="lable-font">select</label>
              <DropSelect className="form-control" />
            </div>

            <button type="submit" className="btn btn-color">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

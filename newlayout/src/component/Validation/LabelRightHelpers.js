import React from "react";
import { useState } from "react";

export default function LabelRightHelpers() {
  const [labelPosition, setLabelPosition] = useState(0);

  return (
    <>
      <div className="card cardflex">
        <form action="#">
          <label>Label Right Position Helpers</label>
          <div className="left-error-frame">
            <div className=" form-groups">
              <label className="lable-font">error-l-0</label>
              <input
                name="error-l-0"
                className="form-control"
                onClick={() => {
                  setLabelPosition(1);
                }}
              ></input>
              <div
                className={
                  labelPosition == 1 ? "feedBackActive error-l-0" : "feedBack"
                }
              >
                error-l-0
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">error-l-50</label>
              <input
                name="error-l-50"
                className="form-control"
                onClick={() => {
                  setLabelPosition(2);
                }}
              ></input>
              <div
                className={
                  labelPosition == 2 ? "feedBackActive error-l-50" : "feedBack"
                }
              >
                error-l-50
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">error-l-100</label>
              <input
                name="error-l-100"
                className="form-control"
                onClick={() => {
                  setLabelPosition(3);
                }}
              ></input>
              <div
                className={
                  labelPosition == 3 ? "feedBackActive error-l-100" : "feedBack"
                }
              >
                error-l-100
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">error-l-150</label>
              <input
                name="error-l-150"
                className="form-control"
                onClick={() => {
                  setLabelPosition(4);
                }}
              ></input>
              <div
                className={
                  labelPosition == 4 ? "feedBackActive error-l-150" : "feedBack"
                }
              >
                error-l-150
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">error-l-200</label>
              <input
                name="error-l-200"
                className="form-control"
                onClick={() => {
                  setLabelPosition(5);
                }}
              ></input>
              <div
                className={
                  labelPosition == 5 ? "feedBackActive error-l-200" : "feedBack"
                }
              >
                error-l-200
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">error-l-250</label>
              <input
                name="error-l-
                250"
                className="form-control"
                onClick={() => {
                  setLabelPosition(6);
                }}
              ></input>
              <div
                className={
                  labelPosition == 6 ? "feedBackActive error-l-250" : "feedBack"
                }
              >
                error-l-250
              </div>
            </div>
          </div>

          <div className="right-error-frame">
            <div className=" form-groups">
              <label className="lable-font">error-l-25</label>
              <input
                name="error-l-25"
                className="form-control"
                onClick={() => {
                  setLabelPosition(7);
                }}
              ></input>
              <div
                className={
                  labelPosition == 7 ? "feedBackActive error-l-25" : "feedBack"
                }
              >
                error-l-25
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">error-l-75</label>
              <input
                name="error-l-75"
                className="form-control"
                onClick={() => {
                  setLabelPosition(8);
                }}
              ></input>
              <div
                className={
                  labelPosition == 8 ? "feedBackActive error-l-75" : "feedBack"
                }
              >
                error-l-75
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">error-l-125</label>
              <input
                name="error-l-125"
                className="form-control"
                onClick={() => {
                  setLabelPosition(9);
                }}
              ></input>
              <div
                className={
                  labelPosition == 9 ? "feedBackActive error-l-125" : "feedBack"
                }
              >
                error-l-125
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">error-l-175</label>
              <input
                name="error-l-175"
                className="form-control"
                onClick={() => {
                  setLabelPosition(10);
                }}
              ></input>
              <div
                className={
                  labelPosition == 10
                    ? "feedBackActive error-l-175"
                    : "feedBack"
                }
              >
                error-l-175
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">error-l-225</label>
              <input
                name="error-l-225"
                className="form-control"
                onClick={() => {
                  setLabelPosition(11);
                }}
              ></input>
              <div
                className={
                  labelPosition == 11
                    ? "feedBackActive error-l-225"
                    : "feedBack"
                }
              >
                error-l-225
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">error-l-275</label>
              <input
                name="error-l-275"
                className="form-control"
                onClick={() => {
                  setLabelPosition(12);
                }}
              ></input>
              <div
                className={
                  labelPosition == 12
                    ? "feedBackActive error-l-275"
                    : "feedBack"
                }
              >
                error-l-275
              </div>
            </div>
          </div>
        </form>
        <button type="submit" className="btn btn-color">
          Submit
        </button>
      </div>
    </>
  );
}

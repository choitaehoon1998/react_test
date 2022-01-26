import React from "react";
import { useState } from "react";
import LabelRightHelpers from "./LabelRightHelpers";

export default function ToolTipPosition() {
  const [toolTip, setToolTip] = useState(0);

  return (
    <>
      <div className="form-frame frame">
        <div className="card">
          <form action="#">
            <label>Locations</label>

            <div className=" form-groups">
              <label className="lable-font">Label Right</label>
              <input
                name="email"
                className="form-control"
                onClick={() => {
                  setToolTip(1);
                }}
              ></input>
              <div className={toolTip == 1 ? "feedBackActive" : "feedBack"}>
                Please enter your email
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">Top Center</label>
              <input
                name="email"
                className="form-control"
                onClick={() => {
                  setToolTip(2);
                }}
              ></input>
              <div
                className={toolTip == 2 ? "feedBackActive col2" : "feedBack"}
              >
                Please enter your email
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">Bottom Center</label>
              <input
                name="email"
                className="form-control"
                onClick={() => {
                  setToolTip(3);
                }}
              ></input>
              <div
                className={toolTip == 3 ? "feedBackActive col3" : "feedBack"}
              >
                Please enter your email
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">Top Left</label>
              <input
                name="email"
                className="form-control"
                onClick={() => {
                  setToolTip(4);
                }}
              ></input>
              <div
                className={toolTip == 4 ? "feedBackActive col4" : "feedBack"}
              >
                Please enter your email
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">Top Right</label>
              <input
                name="email"
                className="form-control"
                onClick={() => {
                  setToolTip(5);
                }}
              ></input>
              <div
                className={toolTip == 5 ? "feedBackActive col5" : "feedBack"}
              >
                Please enter your email
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">Bottom Left</label>
              <input
                name="email"
                className="form-control"
                onClick={() => {
                  setToolTip(6);
                }}
              ></input>
              <div
                className={toolTip == 6 ? "feedBackActive col6" : "feedBack"}
              >
                Please enter your email
              </div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">Bottom Right</label>
              <input
                name="email"
                className="form-control"
                onClick={() => {
                  setToolTip(7);
                }}
              ></input>
              <div
                className={toolTip == 7 ? "feedBackActive col7" : "feedBack"}
              >
                Please enter your email
              </div>
            </div>

            <button type="submit" className="btn btn-color">
              Submit
            </button>
          </form>
        </div>

        <LabelRightHelpers />
      </div>
    </>
  );
}

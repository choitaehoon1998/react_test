import React from "react";
import LabelRightHelpers from "./LabelRightHelpers";

export default function ToolTipPosition() {
  return (
    <>
      <div className="form-frame frame">
        <div className="card">
          <form action="#">
            <label>Locations</label>

            <div className=" form-groups">
              <label className="lable-font">Label Right</label>
              <input name="email" className="form-control"></input>
              <div className="feedBack">Please enter your email</div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">Top Center</label>
              <input name="email" className="form-control"></input>
              <div className="feedBack">Please enter your email</div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">Bottom Center</label>
              <input name="email" className="form-control"></input>
              <div className="feedBack">Please enter your email</div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">Top Left</label>
              <input name="email" className="form-control"></input>
              <div className="feedBack">Please enter your email</div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">Top Right</label>
              <input name="email" className="form-control"></input>
              <div className="feedBack">Please enter your email</div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">Bottom Left</label>
              <input name="email" className="form-control"></input>
              <div className="feedBack">Please enter your email</div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">Bottom Right</label>
              <input name="email" className="form-control"></input>
              <div className="feedBack">Please enter your email</div>
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

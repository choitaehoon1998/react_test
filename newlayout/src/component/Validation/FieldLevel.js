import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function FieldLevel() {
  const [fieldtip, setFieldtip] = useState(0);

  return (
    <div className="form-frame frame">
      <div className="card">
        <form action="#">
          <label>Field Level Validation</label>

          <div className="form-groups">
            <label className="lable-font">Name</label>
            <input
              name="name"
              className="form-control"
              onClick={() => {
                setFieldtip(1);
              }}
            ></input>
            <div className={fieldtip == 1 ? "feedBackOpen" : "feedBack"}>
              Please enter your name
            </div>
          </div>

          <div className=" form-groups">
            <label className="lable-font">Email</label>
            <input
              name="email"
              className="form-control"
              onClick={() => {
                setFieldtip(2);
              }}
            ></input>
            <div className={fieldtip == 2 ? "feedBackOpen" : "feedBack"}>
              Please enter your email
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

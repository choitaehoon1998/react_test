import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function FormLevel() {
  const [formLv, setFormLv] = useState(0);

  return (
    <div className="form-frame frame">
      <div className="card">
        <form action="#">
          <label>Form Level Validation</label>

          <div className="form-groups">
            <label className="lable-font">Name</label>
            <input
              name="name"
              className="form-control"
              onClick={() => {
                setFormLv(1);
              }}
            ></input>
            <div className={formLv == 1 ? "feedBackOpen" : "feedBack"}>
              Please enter your name
            </div>
          </div>

          <div className=" form-groups">
            <label className="lable-font">Email</label>
            <input
              name="email"
              className="form-control"
              onClick={() => {
                setFormLv(2);
              }}
            ></input>
            <div className={formLv == 2 ? "feedBackOpen" : "feedBack"}>
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

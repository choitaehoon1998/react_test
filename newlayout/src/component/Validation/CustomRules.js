import React, { useState } from "react";

export default function CutomRules() {
  return (
    <>
      <div className="form-frame frame">
        <div className="card">
          <form action="#">
            <label>Custom Rules</label>

            <div className="form-groups">
              <label className="lable-font">Name</label>
              <input type={"text"} name="name" className="form-control"></input>
              <div className="feedBack">Please enter your name</div>
            </div>

            <div className="form-groups">
              <label className="lable-font">Email</label>
              <input
                type={"text"}
                name="Email"
                className="form-control"
              ></input>
              <div className="feedBack">Please enter your Email</div>
            </div>

            <div className="form-groups">
              <label className="lable-font">Email Again</label>
              <input
                type={"text"}
                name="email again"
                required
                className="form-control"
              ></input>
              <div className="feedBack">Please enter your eamil address</div>
            </div>

            <div className="form-groups">
              <label className="lable-font">Number</label>
              <input
                type={"text"}
                name="numberProp"
                required
                id="numberProp"
                className="form-control"
              ></input>
              <div className="feedBack">Please enter your Number </div>
            </div>

            <div className="form-groups">
              <label className="lable-font">Max</label>
              <input
                type={"text"}
                max={"5"}
                name="maxPropNumberProp"
                required
                id="maxPropNumberProp"
                className="form-control"
              ></input>
              <div className="feedBack">Please enter your Number </div>
            </div>

            <div className="form-groups">
              <label className="lable-font">Min</label>
              <input
                type={"text"}
                min={"5"}
                name="minPropNumberProp"
                id="minPropNumberProp"
                required
                className="form-control"
              ></input>
              <div className="feedBack">Please enter your Number </div>
            </div>

            <div className="form-groups">
              <label className="lable-font">Regex /^[A-Z]*$/</label>
              <input
                type={"text"}
                pattern="/^[A-Z]*$/"
                name="patternPropRegex"
                required
                id="patternPropRegex"
                className="form-control"
              ></input>
              <div className="feedBack">Please enter your Number </div>
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

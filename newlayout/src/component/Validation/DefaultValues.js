import React from "react";

export default function DefaultValues() {
  return (
    <>
      <div className="form-frame frame">
        <div className="card">
          <form action="#">
            <label>DefaultValues</label>

            <div className="form-groups">
              <label className="lable-font">Location Type</label>
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
              </fieldset>
            </div>

            <div className="form-groups">
              <label className="lable-font">Location Qualities</label>
              <div>
                <input
                  type={"checkbox"}
                  name="Custom checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">Beautiful</label>
              </div>
              <div>
                <input
                  type={"checkbox"}
                  name="Custom checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">Awesome</label>
              </div>
              <div>
                <input
                  type={"checkbox"}
                  name="Custom checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">Wonderful</label>
              </div>
              <div className="feedBack">Must agree to something</div>
            </div>

            <div className="form-groups">
              <label className="lable-font">First Name</label>
              <input
                type={"text"}
                name="First Name"
                className="form-control"
                value={"kim"}
              ></input>
              <div className="feedBack">Please enter your First Name</div>
            </div>

            <div className="form-groups">
              <label className="lable-font">Last Name</label>
              <input
                type={"text"}
                name="last Name"
                className="form-control"
                value={"min"}
              ></input>
              <div className="feedBack">Please enter your Last Name</div>
            </div>

            <div className="form-groups">
              <label className="lable-font">Street</label>
              <input
                type={"text"}
                name="location.street"
                required
                id="street"
                className="form-control"
                value={"17000 py 롯데"}
              ></input>
              <div className="feedBack">This is an error!</div>
            </div>

            <div className="form-groups">
              <label className="lable-font">Suite</label>
              <input
                type={"text"}
                name="location.Suite"
                required
                id="Suite"
                className="form-control"
                value={"110"}
              ></input>
              <div className="feedBack">This field is invalid</div>
            </div>

            <div className="form-groups">
              <label className="lable-font">City</label>
              <input
                type={"text"}
                name="location.City"
                required
                id="City"
                className="form-control"
                value={"Seoul"}
              ></input>
              <div className="feedBack">This field is invalid</div>
            </div>

            <div className=" form-groups">
              <label className="lable-font">State</label>
              <select name="state" className="form-control">
                <option value={"something"}>Something</option>
                <option value={"something else"}>Aomething else</option>
                <option value={"Seoul"}>Seoul</option>
              </select>
            </div>

            <div className="form-groups">
              <label className="lable-font">ZIP Code</label>
              <input
                type={"text"}
                name="location.zip"
                required
                id="zi["
                className="form-control"
                value={"45556"}
              ></input>
              <div className="feedBack">This field is invalid</div>
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

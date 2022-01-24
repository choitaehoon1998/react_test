import "./ValidationTwo.css";

export default function Basic() {
  return (
    <div className="form-frame frame">
      <div className="card">
        <form action="#">
          <label>Basic</label>

          <div className="form-groups">
            <label className="lable-font">Name</label>
            <input name="name" className="form-control"></input>
            <div className="feedBack">Please enter your name</div>
          </div>

          <div className=" form-groups">
            <label className="lable-font">Rank</label>
            <input
              name="rank"
              required
              id="rank"
              className="form-control"
            ></input>
            <div className="feedBack">This is an error!</div>
          </div>

          <div className=" form-groups">
            <label className="lable-font">Option</label>
            <select name="select" className="form-control">
              <option value={""}></option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
            </select>
            <div className="feedBack">Please select an option!</div>
          </div>

          <div className="form-groups">
            <label className="lable-font">Custom Radio Groups</label>
            <fieldset>
              <div className="ckbox-group group-basic">
                <input
                  type={"radio"}
                  name="Custom radio checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">Food</label>
              </div>
              <div className="ckbox-group">
                <input
                  type={"radio"}
                  name="Custom radio checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">flower</label>
              </div>
              <div className="ckbox-group">
                <input
                  type={"radio"}
                  name="Custom radio checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">ball</label>
              </div>
            </fieldset>
          </div>

          <div className="form-groups">
            <label className="lable-font">Custom Checkbox</label>
            <div>
              <input
                type={"checkbox"}
                name="Custom checkbox"
                className="form-control ck-position"
              ></input>
              <label className="label-font-second">Yes</label>
            </div>
            <div>
              <input
                type={"checkbox"}
                name="Custom checkbox"
                className="form-control ck-position"
              ></input>
              <label className="label-font-second">No</label>
            </div>
            <div className="feedBack">Must agree to something</div>
          </div>

          <button type="submit" className="btn btn-color">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

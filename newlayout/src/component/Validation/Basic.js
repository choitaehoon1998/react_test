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

          {/* 체크박스 타입 radio */}
          <div className="form-groups">
            <label className="lable-font">Radio Groups</label>
            <fieldset>
              <div className="ckbox-group ckbox-block">
                <input
                  type={"radio"}
                  name="radio checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">Food</label>
              </div>
              <div className="ckbox-group ckbox-block">
                <input
                  type={"radio"}
                  name="radio checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">flower</label>
              </div>
              <div className="ckbox-group ckbox-block">
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
                ></input>
                <label className="label-font-second">ball</label>
              </div>
            </fieldset>
          </div>

          <button type="submit" className="btn btn-color">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

import "./Validation.css";

export default function Custom() {
  return (
    <div className="form-frame frame">
      <div className="card">
        <form action="#">
          {/* 일반 input */}
          <label>Custom Components and Layouts with Yup</label>

          <div className="form-groups">
            <label className="lable-font">Email</label>
            <input
              name="email"
              className="form-control"
              value={"test@test.com"}
            ></input>
            <div className="feedBack">Please enter your name</div>
          </div>

          {/* select 시작 */}
          <div className=" form-groups">
            <label className="lable-font">select</label>
            <select name="select" className="form-control">
              <option value={"select an option"}>select an option...</option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
            </select>
            <div className="feedBack">Please enter your email</div>
          </div>

          {/* <div className=" form-groups">
            <label className="lable-font">React Select</label>
            <select name="react select" className="form-control">
              <option value={"select an option"}>Food</option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
            </select>
            <div className="feedBack">Pick at least 3 tags</div>
          </div> */}
          {/* 태그 선택은 시간 걸림 */}

          {/*    체크박스 시작 */}

          {/* 싱글체크박스 */}
          <div className="form-groups">
            <label className="lable-font">Single Checkbox</label>
            <div>
              <input
                type={"checkbox"}
                name="single checkbox"
                className="form-control ck-position"
              ></input>
              <label className="label-font-second">Agree to something</label>
            </div>
            <div className="feedBack">Must agree to something</div>
          </div>

          {/* 커스텀 체크박스 */}
          <div className="form-groups">
            <label className="lable-font">Custom Checkbox</label>
            <div>
              <input
                type={"checkbox"}
                name="Custom checkbox"
                className="form-control ck-position"
              ></input>
              <label className="label-font-second">Agree to something</label>
            </div>
            <div className="feedBack">Must agree to something</div>
          </div>

          {/* 체크박스 그룹 */}
          <div className="form-groups">
            <label className="lable-font">Checkbox Group</label>
            <fieldset>
              <div className="ckbox-group">
                <input
                  type={"checkbox"}
                  name="Checkbox Group"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">Food</label>
              </div>
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
              <div className="ckbox-group">
                <input
                  type={"checkbox"}
                  name="Checkbox Group"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">cookie</label>
              </div>
              <div className="ckbox-group">
                <input
                  type={"checkbox"}
                  name="Checkbox Group"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">home</label>
              </div>
            </fieldset>
          </div>
          {/* 체크박스 타입 radio */}
          <div className="form-groups">
            <label className="lable-font">Radio Groups</label>
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
              <div className="ckbox-group">
                <input
                  type={"radio"}
                  name="radio checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">cookie</label>
              </div>
              <div className="ckbox-group">
                <input
                  type={"radio"}
                  name="radio checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">home</label>
              </div>
            </fieldset>
          </div>
          {/* 커스텀 체크박스 라디오 타입 */}
          <div className="form-groups">
            <label className="lable-font">Custom Radio Groups</label>
            <fieldset>
              <div className="ckbox-group">
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
              <div className="ckbox-group">
                <input
                  type={"radio"}
                  name="Custom radio checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">cookie</label>
              </div>
              <div className="ckbox-group">
                <input
                  type={"radio"}
                  name="Custom radio checkbox"
                  className="form-control ck-position"
                ></input>
                <label className="label-font-second">home</label>
              </div>
            </fieldset>
          </div>

          {/* Tags */}
          <div className="form-groups">
            <label className="lable-font">Tags</label>
            <input
              name="Tags"
              className="form-control"
              value={"test@test.com"}
            ></input>
            <div className="feedBack">Please enter your name</div>
          </div>

          <button type="submit" className="btn btn-color">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

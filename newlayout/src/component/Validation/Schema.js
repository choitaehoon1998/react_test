import "./Validation.css";

export default function Schema() {
  return (
    <div className="form-frame frame">
      <div className="card">
        <form action="#">
          <label>Validation Schema with Yup</label>

          <div className="form-groups">
            <label className="lable-font">Frist name</label>
            <input
              type={"text"}
              name="Frist name"
              className="form-control"
            ></input>
            <div className="feedBack">Please enter your frist name</div>
          </div>

          <div className="form-groups">
            <label className="lable-font">Last name</label>
            <input
              type={"text"}
              name="last name"
              className="form-control"
            ></input>
            <div className="feedBack">Please enter your last name</div>
          </div>

          <div className=" form-groups">
            <label className="lable-font">Email</label>
            <input type={"text"} name="email" className="form-control"></input>
            <div className="feedBack">Please enter your email</div>
          </div>

          <div className="form-groups">
            <label className="lable-font">Details</label>
            <textarea name="details" className="form-control"></textarea>
            <div className="feedBack">Please provide the details</div>
          </div>

          <button type="submit" className="btn btn-color">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

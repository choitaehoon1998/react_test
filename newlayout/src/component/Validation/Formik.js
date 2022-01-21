import "./Validation.css";

export default function Formik() {
  return (
    <div className="form-frame frame1">
      <form action="#">
        <label>Field Level Validation</label>
        <div className="form-groups">
          <label>name</label>
          <input name="name" className="form-control"></input>
          <div className="feedBack">Please enter your name</div>
        </div>
        <div className=" form-groups">
          <label>email</label>
          <input name="email" className="form-control"></input>
          <div className="feedBack">Please enter your email</div>
        </div>
        <button type="submit" className="btn btn-color">
          Submit
        </button>
      </form>
    </div>
  );
}

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
            <label className="lable-font">Email</label>
            <input name="email" className="form-control"></input>
            <div className="feedBack">Please enter your email</div>
          </div>

          <button type="submit" className="btn btn-color">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

import React from "react";

const Suite = (props) => {
  return (
    <>
      <div>
        <input type="text" className="form-control" name="Suite" required>
          {props.children}
        </input>
      </div>
    </>
  );
};

export default Suite;

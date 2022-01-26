import React from "react";

const City = (props) => {
  return (
    <>
      <div>
        <input type="text" className="form-control" name="city" required>
          {props.children}
        </input>
      </div>
    </>
  );
};

export default City;

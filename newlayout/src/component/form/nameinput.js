import React from "react";

const NameInput = (props) => {
  return (
    <>
      <input type="text" className="form-control">
        {props.children}
      </input>
    </>
  );
};

export default NameInput;

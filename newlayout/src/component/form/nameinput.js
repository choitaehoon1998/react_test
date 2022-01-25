import React from "react";

const NameInput = (props) => {
  return (
    <>

        <input name="name" className="form-control">
          {props.children}
        </input>

    </>
  );
};

export default NameInput;

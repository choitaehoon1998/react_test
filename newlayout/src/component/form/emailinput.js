import React from "react";

const EmailInput = (props) => {
  return (
    <>

        <input name="email" className="form-control">
          {props.children}
        </input>

    </>
  );
};

export default EmailInput;

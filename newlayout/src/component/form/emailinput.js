import React from "react";

const EmailInput = (props) => {
  return (
    <>
      <div>
        <input type="email" className="form-control">
          {props.children}
        </input>
      </div>
    </>
  );
};

export default EmailInput;

import React from "react";

const PassWord = (props) => {
  return (
    <>
      <div>
        <input type="password" className="form-control">
          {props.children}
        </input>
      </div>
    </>
  );
};

export default PassWord;

import React from "react";

const NumberInput = (props) => {
  return (
    <>
      <div>
        <input type="number" className="form-control" required>
          {props.children}
        </input>
      </div>
    </>
  );
};

export default NumberInput;

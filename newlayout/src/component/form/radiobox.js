import React from "react";

const RadioBox = (props) => {
  return (
    <>
      <div className="checkposition line">
        <input type="radio" id={props.id} disabled={props.disabled} />
        <label htmlFor={props.id} className="label-font-second">
          {props.children}
        </label>
      </div>
    </>
  );
};

export default RadioBox;

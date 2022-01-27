import React from "react";

const CheckBox = (props) => {
  return (
    <>
      <div className="checkposition line">
        <input type="checkbox" id={props.id} disabled={props.disabled} />
        <label htmlFor={props.id} className="label-font-second">
          {props.children}
        </label>
      </div>
    </>
  );
};

export default CheckBox;

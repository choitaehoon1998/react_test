import React from "react";

const ZipInput = (props) => {
  return (
    <>
      <div>
        <input type="text" className="form-control" name="zipinput" required>
          {props.children}
        </input>
      </div>
    </>
  );
};

export default ZipInput;

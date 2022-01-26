import React from "react";

const Regex = (props) => {
  return (
    <>
      <div>
        <input type="text" className="form-control" name="Regex" required>
          {props.children}
        </input>
      </div>
    </>
  );
};

export default Regex;

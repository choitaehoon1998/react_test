import React from "react";

const Mininput = (props) => {
  return (
    <>
      <div>
        <input type="text" className="form-control" required>
          {props.children}
        </input>
      </div>
    </>
  );
};

export default Mininput;

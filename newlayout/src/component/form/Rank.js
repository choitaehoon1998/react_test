import React from "react";

const Rank = (props) => {
  return (
    <>
      <div>
        <input type="text" className="form-control" name="rank" required>
          {props.children}
        </input>
      </div>
    </>
  );
};

export default Rank;

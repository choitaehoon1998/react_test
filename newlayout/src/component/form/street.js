import React from "react";

const Street = (props) => {
  return (
    <>
      <div>
        <input type="text" className="form-control" name="street" required>
          {props.children}
        </input>
      </div>
    </>
  );
};

export default Street;

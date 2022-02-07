import React, { useState } from "react";

function NumberInput() {
  const [number, setNumber] = useState("");

  const handleChange = ({ target: { value } }) => setNumber(value);
  return (
    <>
      <input
        type="number"
        name="number"
        value={number}
        onChange={handleChange}
        className="form-control1"
      />
    </>
  );
}

export default NumberInput;

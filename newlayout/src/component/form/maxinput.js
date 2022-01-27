import React, { useState } from "react";

function MaxInput() {
  const [max, setMax] = useState("");

  const handleChange = ({ target: { value } }) => setMax(value);

  return (
    <input
      type="text"
      name="max"
      value={max}
      onChange={handleChange}
      className="form-control"
      required
    />
  );
}

export default MaxInput;

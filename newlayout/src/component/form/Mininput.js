import React, { useState } from "react";

function Mininput() {
  const [min, setMin] = useState("");

  const handleChange = ({ target: { value } }) => setMin(value);

  return (
    <input
      type="text"
      name="min"
      value={min}
      onChange={handleChange}
      className="form-control"
      required
    />
  );
}

export default Mininput;

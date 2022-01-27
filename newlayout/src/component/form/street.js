import React, { useState } from "react";

function Street() {
  const [street, setStreet] = useState("");

  const handleChange = ({ target: { value } }) => setStreet(value);

  return (
    <input
      type="text"
      name="street"
      value={street}
      onChange={handleChange}
      className="form-control"
      required
    />
  );
}

export default Street;

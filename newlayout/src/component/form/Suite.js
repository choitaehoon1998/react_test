import React, { useState } from "react";

function Suite() {
  const [suite, setSuite] = useState("");

  const handleChange = ({ target: { value } }) => setSuite(value);

  return (
    <input
      type="text"
      name="suite"
      value={suite}
      onChange={handleChange}
      className="form-control1"
      required
    />
  );
}

export default Suite;

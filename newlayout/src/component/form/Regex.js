import React, { useState } from "react";

function Regex() {
  const [regex, setRegex] = useState("");

  const handleChange = ({ target: { value } }) => setRegex(value);

  return (
    <input
      type="text"
      name="regex"
      value={regex}
      onChange={handleChange}
      className="form-control"
      required
    />
  );
}

export default Regex;

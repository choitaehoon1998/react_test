import React, { useState } from "react";

function Password() {
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { value } }) => setPassword(value);

  return (
    <input
      type="password"
      name="password"
      value={password}
      onChange={handleChange}
      className="form-control1"
    />
  );
}

import React, { useState } from "react";

function EmailInput() {
  const [email, setEmail] = useState("");

  const handleChange = ({ target: { value } }) => setEmail(value);
  return (
    <>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        className="form-control"
      />
    </>
  );
}

export default EmailInput;

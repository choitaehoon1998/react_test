import React, { useState } from "react";

function City() {
  const [city, setCity] = useState("");
  const handleChange = ({ target: { value } }) => setCity(value);
  return (
    <input
      type="text"
      name="city"
      value={city}
      onChange={handleChange}
      className="form-control1"
    />
  );
}

export default City;

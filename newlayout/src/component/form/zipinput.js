import React, { useState } from "react";

function ZipInput() {
  const [zip, setzip] = useState("");

  const handleChange = ({ target: { value } }) => setzip(value);
  return (
    <>
      <div>
        <input
          type="text"
          className="form-control"
          name="zipinput"
          value={zip}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
}

export default ZipInput;

import React, { useState } from "react";

function Rank() {
  const [rank, setRank] = useState("");
  const handleChange = ({ target: { value } }) => setRank(value);
  return (
    <input
      type="text"
      name="rank"
      value={rank}
      onChange={handleChange}
      className="form-control"
    />
  );
}

export default Rank;

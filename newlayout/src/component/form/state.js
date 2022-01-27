import React, { useMemo } from "react";
import Select from "react-select";

//  npm i react-select 설치 필수

const StateInput = (props) => {
  const options = useMemo(
    () => [
      { value: "cook", label: "Cook" },
      { value: "banana", label: "Banana" },
      { value: "melon", label: "melon" },
      { value: "berry", label: "Berry" },
    ],
    []
  );
  return (
    <div className="ReactSelectFix">
      <Select options={options} />
    </div>
  );
};

export default StateInput;

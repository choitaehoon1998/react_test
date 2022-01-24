import React, { useMemo } from "react";
import Select from "react-select";
//  npm i react-select 설치 필수

function ReactSelectFix() {
  const options = useMemo(
    () => [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
      { value: "berry", label: "Berry" },
    ],
    []
  );
  return (
    <div className="ReactSelectFix">
      <Select options={options} defaultValue={options} isMulti />
    </div>
  );
}

export default ReactSelectFix;

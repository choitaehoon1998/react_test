import React from "react";
import ReactDOM from "react-dom";
import "react-dropzone-component/styles/filepicker.css";
import "dropzone/dist/min/dropzone.min.css";

import DropUploader from "./DropUploader";

export function DropZone() {
  return (
    <div className="App">
      <DropUploader
        onUpload={(file) => console.log(file)}
        onRemove={(file) => console.log(file)}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DropZone />, rootElement);

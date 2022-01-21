import "./button.css";
import React from "react";

const NormalButton = (props) => {
    return(
        <button className="btn btn-color">{props.name}</button>
    );
}
export default NormalButton;

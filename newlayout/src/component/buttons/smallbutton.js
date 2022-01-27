import "./button.css";
import React from "react";

const SmallButton = (props) => {
    return(
        <button className="btn-small btn-color">{props.name}</button>
    );
}
export default SmallButton;
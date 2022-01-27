import "./button.css";
import React from "react";

const BigButton = (props) =>{
    return(
        <button className="btn-big btn-color">{props.name}</button>
    );
}
export default BigButton;
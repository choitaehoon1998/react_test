import "./button.css";
import React from "react";

const MissButton = (props) =>{
    return(
        <button className="btn-miss" disabled >{props.name}</button>
    );
}
export default MissButton;

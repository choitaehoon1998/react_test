import "./button.css";
import React from "react";

const LinkButton = (props) => {
    return(
        <a href={props.link}>
            <button type="button" className="btn-link btn-color" >{props.name}</button>
        </a>
    );
}
export default LinkButton;
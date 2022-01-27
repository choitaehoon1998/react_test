import "./button.css";
import React from "react";

export const NormalButton = (props) => {
    return(
        <button className="btn btn-color">{props.name}</button>
    );
}

export const BigButton = (props) => {
    return(
        <button className="btn-big btn-color">{props.name}</button>
    );
    
}

export const SmallButton = (props) => {
    return(
        <button className="btn-small btn-color">{props.name}</button>
    );
}

export const LinkButton = (props) => {
    return(
        <a href={props.link}>
            <button className="btn-link btn-color" >{props.name}</button>
        </a>
    );
}

export const MissButton = (props) =>{
    return(
        <button className="btn-miss" disabled >{props.name}</button>
    );
}

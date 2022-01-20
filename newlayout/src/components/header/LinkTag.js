import "./headerStyle.css";
import React,{useState} from "react";


const DivTag = (props) => {
    
        return(
            <div className="topLinkText">{props.text}</div>
        );
}
export default DivTag;
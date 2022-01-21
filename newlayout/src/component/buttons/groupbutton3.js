import "./button.css";
import React from "react";

const GroupButton3 = (props) => {
    return(
        
    <div className="mgb-5">
        <button className="btn-radius-left btn-color">{props.btn1}</button>
        <button className="btn-radius-none btn-color">{props.btn2}</button>
        <button className="btn-radius-right btn-color">{props.btn3}</button>
    </div>
    );
}
export default GroupButton3;
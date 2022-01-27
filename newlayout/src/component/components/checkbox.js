import React from "react";

const CheckboxCoponent = (props) => {
    return(
        <>
        <div>
            <input type="checkbox" id={props.id} disabled={props.disabled} />
            <label htmlFor={props.id} className="checkboxLabel">{props.children}</label>
        </div>
        </>
    )
}

export default CheckboxCoponent
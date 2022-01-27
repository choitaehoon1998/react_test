import React from "react";
import "./compostyle.css";

export const Switch = () => {
    return(
        <div className="wrapper">
            <input type="checkbox" id="switch"/>
                <label htmlFor="switch" className="switch_label">
                    <span className="onf_btn" />
                </label>
        </div>
    );
}

export const SmlSwitch = () => {
    return(
        <div className="wrapper">
            <input type="checkbox" id="smlswitch"/>
                <label htmlFor="smlswitch" className="smlswitch_label">
                    <span className="smlonf_btn" />
                </label>
        </div>
    );
}
import React from "react";
import "./compostyle.css";

export const Switch = () => {
    return(
        <div class="wrapper">
            <input type="checkbox" id="switch"/>
                <label for="switch" class="switch_label">
                    <span class="onf_btn" />
                </label>
        </div>
    );
}

export const SmlSwitch = () => {
    return(
        <div class="wrapper">
            <input type="checkbox" id="smlswitch"/>
                <label for="smlswitch" class="smlswitch_label">
                    <span class="smlonf_btn" />
                </label>
        </div>
    );
}
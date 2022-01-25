import React from "react";

export const Slider = (props) => {
    
    const gapSlider = document.getElementById("myRange");
    debugger
        const y= document.getElementById("f");
        y.innerHTML = gapSlider.value;
        gapSlider.oninput = function(){
        y.innerHTML=this.value
        }
    
    return(
        <>
        <div className="oneslide">
            <input type="range" id="myRange" name="slider" min={props.min} max={props.max} />
            <span id="f"></span>
        </div>
        
        
        </>
    );
    
}
import "./sideStyle.css"
import React from "react"

const SideMenuName = (props) => {
    return(
    <div className="sideMenuName">
        <h2>{props.title}</h2>
    </div>
    );
}
export default SideMenuName;
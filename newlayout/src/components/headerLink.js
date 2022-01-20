import "./headerStyle.css";
import React,{Component} from "react";
import { Link } from "react-router-dom";

const HeaderLink = (props) => {
        return(
            <Link to="/home" className="navlist" >
                <div className="topLinkText">{props.text}</div>
              </Link>
        );
}
// {menuNav === 1 ? "navListActive" : onClick={() => {
//                 setMenu(1);
//                 }}}
export default HeaderLink;
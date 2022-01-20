import React from "react";
import "./input.css";

const Search1 = (props) => {
  return(
    <div className="headerseach2">
    <div id="header-SeachText">
      <input
        type="text"
        className="from1"
        placeholder={props.title}
      ></input>
    </div>
  </div>
  );
}

export default Search1;
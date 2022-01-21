import { BrowserRouter, Link, Route } from "react-router-dom";
import { useState } from "react";
import "./ValidationsPage.css";
import Formik from "../component/Validation/Formik";
import Schema from "../component/Validation/Schema";

function Validation() {
  return (
    <div className="content-wrap">
      <div className="content">
        <div className="content-main">
          <div className="content-title">
            <h3>Validation</h3>
          </div>

          <div className="left-frame">
            <Formik />
            <Schema />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Validation;

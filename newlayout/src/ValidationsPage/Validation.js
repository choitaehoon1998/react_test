import { BrowserRouter, Link, Route } from "react-router-dom";
import { useState } from "react";
import "./ValidationsPage.css";
import Formik from "../component/Validation/Formik";
import Schema from "../component/Validation/Schema";
import Custom from "../component/Validation/Custom";
import TopLabelsOver from "../component/Validation/TopLabelsOver";
import TopLabelsIn from "../component/Validation/TopLabelIn";
import Basic from "../component/Validation/Basic";

function Validation() {
  return (
    <div className="content-wrap">
      <div className="content">
        <div className="content-main">
          <div className="content-title">
            <h2>Validation</h2>
          </div>

          <div className="left-frame">
            <h3>Formik Validation</h3>
            <Formik />
            <Schema />
            <Custom />
            <TopLabelsOver />
            <TopLabelsIn />
          </div>
          <div className="right-frame">
            <h3>Availity Reactstrap Validation</h3>
            <Basic />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Validation;

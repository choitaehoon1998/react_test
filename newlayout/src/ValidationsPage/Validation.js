import { BrowserRouter, Link, Route } from "react-router-dom";
import { useState } from "react";
import FieldLevel from "../component/Validation/FieldLevel";
import Schema from "../component/Validation/Schema";
import Custom from "../component/Validation/Custom";
import TopLabelsOver from "../component/Validation/TopLabelsOver";
import TopLabelsIn from "../component/Validation/TopLabelIn";
import Basic from "../component/Validation/Basic";
import CustomRules from "../component/Validation/CustomRules";
import DefaultValues from "../component/Validation/DefaultValues";
import ToolTipPosition from "../component/Validation/TooltipPositon";
import FormLevel from "../component/Validation/FormLevel";

function Validation() {
  return (
    <div className="content-wrap">
      <div className="content">
        <div className="content-main">
          <div className="content-tit">
            <h2>Validation</h2>
          </div>

          <div className=" main-flex">
            <div className="left-frame">
              <h3>Formik Validation</h3>
              <FieldLevel />
              <FormLevel />
              <Schema />
              <Custom />
              <TopLabelsOver />
              <TopLabelsIn />
            </div>
            <div className="right-frame">
              <h3>Availity Reactstrap Validation</h3>
              <Basic />
              <CustomRules />
              <DefaultValues />
            </div>
          </div>

          <div className="bottom-frame">
            <h3>Tooltip Positioning</h3>
            <ToolTipPosition />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Validation;

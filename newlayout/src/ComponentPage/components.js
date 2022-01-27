import React from "react";
import "./compage.css";
import ContentTitle from "../component/content/ContentTitel";
import { Switch, SmlSwitch } from "../component/components/switch";
import { Slider } from "../component/components/slider";
import CheckboxCoponent from "../component/components/checkbox";
import { CountingStar } from "../component/components/countingstar";
import Tags from "../component/components/tags";
import { DropZone } from "../component/components/dropzone";
import DatePickerComponent from "../component/components/dataPickerComponent";
import DateRange from "../component/components/dateRange";
import EmbeddedPicker from "../component/components/embeddedpicker";
import NomalDatepicker from "../component/components/nomaldatepicker";
import RadioBox from "../component/form/radiobox";
import { Tags } from "../component/components/tags";
import {DropZone} from "../component/components/dropzone";
import AutosuggestComponent from "../component/components/autosuggestComponent";
import DatePickerComponent from "../component/components/datePickerComponent";

export default function Components() {
  return (
    <>
      <div className="content-wrap">
        <div className="content">
          <div className="content-main">
            <ContentTitle title="Form Components"></ContentTitle>

            <div className="left-frame">
              <div className="form-frame frame1">
                <label>Custom Checkbox</label>
                <div className="form-groups">
                  <CheckboxCoponent id="check1">
                    Check this custom checkbox
                  </CheckboxCoponent>
                  <CheckboxCoponent id="check2">Or this one</CheckboxCoponent>
                  <CheckboxCoponent id="check3" disabled="true">
                    But not this disabled one
                  </CheckboxCoponent>
                </div>

                <label>Custom Radios</label>
                <div className="form-groups">
                  <RadioBox>cookie</RadioBox>
                  <RadioBox>cookie</RadioBox>
                  <RadioBox>cookie</RadioBox>
                </div>
              </div>
            </div>

            <div className="left-frame">
              <div className="form-frame frame1">
                <label>Date Picker</label>
                <div className="form-groups">
                  <p>Date</p>
                  <NomalDatepicker></NomalDatepicker>
                </div>
                <div className="form-groups">
                  <p>Date with Time</p>
                  <DatePickerComponent></DatePickerComponent>
                </div>


                    <div className="left-frame">
                        <div className="form-frame frame1">
                            <label>
                                Custom Autosuggest
                            </label>
                            <div className="form-groups">
                                <AutosuggestComponent></AutosuggestComponent>
                            </div>
                        

                        </div>
                    </div>

                    <div className="left-frame">
                        <div className="form-frame frame1">
                            <label>
                                Date Picker
                            </label>
                            <span>Date with Time</span>
                            <div className="form-groups">
                                <DatePickerComponent></DatePickerComponent>
                            </div>
                        

                        </div>
                    </div>

                    

                <div className="form-groups">
                  <p>Date Range</p>
                  <DateRange></DateRange>
                </div>
                <div className="form-groups">
                  <p>Embeddedpicker</p>
                  <EmbeddedPicker></EmbeddedPicker>
                </div>
              </div>
            </div>

            <div className="left-frame">
              <div className="form-frame frame1">
                <label>Dropzone</label>

                <div className="form-groups">
                  <DropZone></DropZone>
                </div>
              </div>
            </div>

            <div className="left-frame">
              <div className="form-frame frame1">
                <label>Tags</label>

                <div className="form-groups">
                  <Tags></Tags>
                </div>
              </div>
            </div>

            <div className="left-frame">
              <div className="form-frame frame1">
                <label>Switch</label>
                <div className="form-groups">
                  <p>Normal</p>
                  <Switch></Switch>
                </div>

                <div className="form-groups">
                  <p>Small</p>
                  <SmlSwitch></SmlSwitch>
                </div>
              </div>
            </div>

            <div className="left-frame">
              <div className="form-frame frame1">
                <label>Slider</label>

                <div className="form-groups">
                  <Slider min="0" max="100"></Slider>
                </div>
              </div>
            </div>

            <div className="left-frame">
              <div className="form-frame frame1">
                <label>Rating</label>

                <div className="form-groups">
                  <CountingStar></CountingStar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

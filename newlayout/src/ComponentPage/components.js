import React from "react";
import "./compage.css";
import ContentTitle from "../component/content/ContentTitel";
import { Switch, SmlSwitch } from "../component/components/switch";
import { Slider } from "../component/components/slider";
import CheckboxCoponent from "../component/components/checkbox";
import { CountingStar } from "../component/components/countingstar";
import { Tags } from "../component/components/tags";
import {DropZone} from "../component/components/dropzone";

export default function Components() {
    return( 
        <>
        <div className="content-wrap">
            <div className="content">
                <div className="content-main">
                    <ContentTitle title="Form Components"></ContentTitle>

                    <div className="left-frame">
                        <div className="form-frame frame1">
                            <label>
                                Custom Checkbox
                            </label>
                            <div className="form-groups">
                                <CheckboxCoponent id ='check1'>Check this custom checkbox</CheckboxCoponent>
                                <CheckboxCoponent id= 'check2'>Or this one</CheckboxCoponent>
                                <CheckboxCoponent id= 'check3' disabled='true' >But not this disabled one</CheckboxCoponent>
                            </div>

                            <label>
                                Custom Radios
                            </label>
                            <div className="form-groups">
                                
                            </div>
                        

                        </div>
                    </div>

                    

                    <div className="left-frame">
                        <div className="form-frame frame1">
                            <label>
                                스위치
                            </label>
                            <label>
                                스위치
                            </label>
                            

                            <div className="form-groups">
                                <p>기본 스위치</p>
                                <Switch></Switch>
                            </div>

                            <div className="form-groups">
                                <p>작은 스위치</p>
                                <SmlSwitch></SmlSwitch>
                            </div>


                        </div>
                    </div>

                    <div className="left-frame">
                        <div className="form-frame frame1">
                            <label>
                                슬라이더
                            </label>
                            
                            <div className="form-groups">
                                <p>기본 슬라이더</p>
                                <Slider  min="0" max="100"></Slider>
                            </div>

                        </div>
                    </div>

                    <div className="left-frame">
                        <div className="form-frame frame1">
                            <label>
                                별점
                            </label>

                            <div className="form-groups">
                               <CountingStar></CountingStar> 
                            </div>

                        </div>
                    </div>

                    <div className="left-frame">
                        <div className="form-frame frame1">
                            <label>
                                드랍존
                            </label>

                            <div className="form-groups">
                                <DropZone></DropZone>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
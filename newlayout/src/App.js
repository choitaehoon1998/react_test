import "./App.css";
import "./reset.css";
import HEADER from "./compornent/header/header";
import Router from "./routes";
import React from "react";
import SideMenu from "./sidemenu";
import Test from "./compornent/sidemenu/sm";


export default function App() {
  
  return (
    <> 

      <HEADER/>

      <Test/>
      
      <Router/>
    </>
      
    
  );
}


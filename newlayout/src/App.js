import "./App.css";
import "./reset.css"; 
import HEADER from "./compornent/header/header";
import Router from "./routes";
import Side from "./compornent/Side";
import React from "react";
import Context from "./Context";

export default function App() {
  return (
    <>
      <Context>
        <HEADER />
        <Side />
        <Router />
      </Context>
    </>
  );
}

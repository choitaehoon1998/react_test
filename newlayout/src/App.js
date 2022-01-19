import React from "react";
import "./Style/App.css";
import "./Style/reset.css";
import "./Style/page.css";
import Header from "./layouts/Header";
import Router from "./routers/routes";
import SideBar from "./layouts/sidebar/SideBar";
import Context from "./Context/Context";

function App() {
  return (
    <>
      <Context>
        <Header />
        <SideBar />
        <Router />
      </Context>
    </>
  );
}

export default App;

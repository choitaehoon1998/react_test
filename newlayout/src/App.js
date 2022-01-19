import "./App.css";
import "./reset.css";
import { useState } from "react";
import Sidemenu from "./component/Sidemenu";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Header />
      <Sidemenu />
    </>
  );
}

export default App;

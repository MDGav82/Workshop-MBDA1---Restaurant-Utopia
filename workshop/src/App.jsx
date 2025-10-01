import { useState } from "react";
import Home from "./pages/Home";

import "./App.css";
import Navbar from "./nav/nav";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
    </>
  );
}

export default App;

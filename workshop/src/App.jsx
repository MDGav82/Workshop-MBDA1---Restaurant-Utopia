import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllMenus from "./pages/Menu";
import Jour from "./pages/Jour";
import Branch from "./pages/Branch";
import Soir from "./pages/Soir";

import "./App.css";
import Navbar from "./nav/nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Jour" element={<Jour />} />
          <Route path="/Brunch" element={<Branch />} />
          <Route path="/Soir" element={<Soir />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllMenus from "./pages/Menu";
import Jour from "./pages/Jour";
import Branch from "./pages/Branch";
import Soir from "./pages/Soir";
import Reservations from "./pages/Reservations";
import Navbar from "./layout/nav";
import Footer from "./layout/Footer";
import "./App.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<AllMenus />} />
          <Route path="/jour" element={<Jour />} />
          <Route path="/brunch" element={<Branch />} />
          <Route path="/soir" element={<Soir />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

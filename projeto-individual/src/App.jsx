import "bootstrap/dist/css/bootstrap.min.css";
import Nav_bar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Lista from "../pages/Lista";

function App() {
  return (
    <>
      <Nav_bar />

      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/lista" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

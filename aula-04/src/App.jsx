import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Contato from "./pages/Contato";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<h1>Pagina não Encontrada</h1>} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <footer className="rodape">
        <strong>🎬 Catálogo de Filmes</strong>
        <span>Projeto Praticando • React Router</span>
      </footer>
    </div>
  );
}

export default App;

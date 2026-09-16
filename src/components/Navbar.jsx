import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="cabecalho">
      <NavLink to="/" className="logo">🎬 Catálogo de Filmes</NavLink>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "link ativo" : "link"}>Home</NavLink>
        <NavLink to="/filmes" className={({ isActive }) => isActive ? "link ativo" : "link"}>Filmes</NavLink>
        <NavLink to="/sobre" className={({ isActive }) => isActive ? "link ativo" : "link"}>Sobre</NavLink>
        <NavLink to="/contato" className={({ isActive }) => isActive ? "link ativo" : "link"}>Contato</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;

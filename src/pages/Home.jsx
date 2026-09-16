import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="pagina">
      <p className="tag">BEM-VINDO</p>
      <h1>🎬 CATÁLOGO DE FILMES</h1>
      <p>Meus filmes favoritos em um só lugar.</p>

      <div className="destaque">
        <h2>Bem-vindo ao meu catálogo!</h2>
        <p>
          Aqui você pode conhecer alguns filmes da minha seleção,
          com informações sobre ano, gênero e direção.
        </p>
        <Link to="/filmes" className="botao">Ver filmes</Link>
      </div>
    </section>
  );
}

export default Home;

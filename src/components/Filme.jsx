import "./Filme.css";

function Filme({ nome, ano, genero, diretor }) {
  return (
    <article className="filme-card">
      <div className="tela">🎬 FILME</div>

      <div className="filme-cabecalho">
        <h2>{nome}</h2>
        <div className="icones">🍿 🎥</div>
      </div>

      <div className="informacoes">
        <p>📅 <span>Ano:</span> {ano}</p>
        <p>🎭 <span>Gênero:</span> {genero}</p>
        <p>🎬 <span>Diretor:</span> {diretor}</p>
      </div>
    </article>
  );
}

export default Filme;

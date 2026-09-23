import { FaReact, FaServer } from "react-icons/fa";
import { SiAxios, SiMui, SiThemoviedatabase } from "react-icons/si";

function Sobre() {
  return (
    <section className="pagina">
      <p className="tag">SOBRE</p>
      <h1>Sobre o catálogo</h1>

      <div className="destaque">
        <h2>Um espaço para filmes 🎬</h2>
        <p>
          Este projeto foi criado para praticar React, componentes, React Router
          e consumo de uma API externa.
        </p>
        <p>
          A aplicação usa Axios para comunicação com a API, Material UI para
          componentes visuais, React Icons para ícones e um Service Worker para
          recursos básicos de funcionamento offline.
        </p>

        <div className="tecnologias">
          <span><FaReact /> React</span>
          <span><SiAxios /> Axios</span>
          <span><SiMui /> Material UI</span>
          <span><FaServer /> Service Worker</span>
          <span><SiThemoviedatabase /> TMDB API</span>
        </div>

        <p className="tmdb-aviso">
          Este produto usa a API do TMDB, mas não é endossado ou certificado pelo TMDB.
        </p>
      </div>
    </section>
  );
}

export default Sobre;

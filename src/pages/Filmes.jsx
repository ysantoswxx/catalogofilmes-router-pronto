import Filme from "../components/Filme";
import "../components/CatalogoFilmes.css";

function Filmes() {
  const filmes = [
    { nome: "A Princesa e o Sapo", ano: 2009, genero: "Animação / Fantasia", diretor: "Ron Clements e John Musker" },
    { nome: "Cinderela", ano: 1950, genero: "Animação / Fantasia", diretor: "Clyde Geronimi, Wilfred Jackson e Hamilton Luske" },
    { nome: "À Espera de um Milagre", ano: 1999, genero: "Drama / Fantasia", diretor: "Frank Darabont" },
    { nome: "O Castelo Animado", ano: 2004, genero: "Animação / Fantasia", diretor: "Hayao Miyazaki" },
    { nome: "Interestelar", ano: 2014, genero: "Ficção científica", diretor: "Christopher Nolan" },
    { nome: "Homem-Aranha no Aranhaverso", ano: 2018, genero: "Animação / Ação", diretor: "Bob Persichetti, Peter Ramsey e Rodney Rothman" }
  ];

  return (
    <section className="pagina">
      <p className="tag">FILMES</p>
      <h1>Meus filmes favoritos</h1>
      <p>Confira as informações dos filmes do catálogo.</p>

      <div className="catalogo">
        {filmes.map((filme) => (
          <Filme key={filme.nome} {...filme} />
        ))}
      </div>
    </section>
  );
}

export default Filmes;

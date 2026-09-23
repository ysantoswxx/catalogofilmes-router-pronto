import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import Filme from "../components/Filme";
import { buscarFilmes } from "../services/tmdb";
import "../components/CatalogoFilmes.css";

function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  async function carregarFilmes(termo = "") {
    try {
      setCarregando(true);
      setErro("");
      const resultados = await buscarFilmes(termo);
      setFilmes(resultados);
    } catch (error) {
      console.error(error);
      setErro(
        "Não foi possível carregar os filmes. Confira sua VITE_TMDB_API_KEY no arquivo .env."
      );
      setFilmes([]);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarFilmes();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    carregarFilmes(busca);
  }

  return (
    <section className="pagina">
      <p className="tag">TMDB API</p>
      <h1>Catálogo de filmes</h1>
      <p>Filmes carregados diretamente da API do The Movie Database.</p>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 700,
          mx: "auto",
          mt: 4,
          mb: 5,
          display: "flex",
          gap: 1.5,
          alignItems: "center",
        }}
      >
        <TextField
          fullWidth
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          placeholder="Pesquisar filme..."
          label="Buscar"
          variant="outlined"
          InputProps={{
            startAdornment: <FaSearch style={{ marginRight: 10 }} />,
          }}
          sx={{
            "& .MuiInputBase-root": {
              color: "#F4B6CF",
              backgroundColor: "#090909",
            },
            "& .MuiInputLabel-root": { color: "#C88AA8" },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#C88AA8" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#F4B6CF" },
          }}
        />
        <button className="botao-pesquisa" type="submit">
          Pesquisar
        </button>
      </Box>

      {erro && (
        <Alert severity="error" sx={{ maxWidth: 700, mx: "auto", mb: 4 }}>
          {erro}
        </Alert>
      )}

      {carregando ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
          <CircularProgress sx={{ color: "#F4B6CF" }} />
        </Box>
      ) : filmes.length === 0 ? (
        <Typography sx={{ color: "#C88AA8", py: 6 }}>
          Nenhum filme encontrado.
        </Typography>
      ) : (
        <div className="catalogo">
          {filmes.map((filme) => (
            <Filme key={filme.id} filme={filme} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Filmes;

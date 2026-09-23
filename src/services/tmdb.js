import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "pt-BR",
    include_adult: false,
  },
});

export async function buscarFilmes(query = "") {
  const endpoint = query.trim() ? "/search/movie" : "/movie/popular";
  const params = query.trim() ? { query: query.trim(), page: 1 } : { page: 1 };

  const resposta = await tmdb.get(endpoint, { params });
  return resposta.data.results || [];
}

export function urlImagem(caminho) {
  return caminho
    ? `https://image.tmdb.org/t/p/w500${caminho}`
    : null;
}
